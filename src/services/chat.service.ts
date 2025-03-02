import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, orderBy, query, collectionData, where, getDocs, getDoc, doc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { firstValueFrom } from 'rxjs'; // Add this import

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  // Method to send a message and store it in a chat-specific collection
  async sendMessage(message: string, senderId: string, senderImage: string, receiverId: string, receiverImage: string) {
    // Fetch the current user details
    const user = await firstValueFrom(this.authService.getCurrentUser());
    
    if (!user) {
      console.error('User not authenticated');
      return;
    }
    
    // Ensure the chat collection is unique for each user pair
    const chatId = this.generateChatId(user.uid, receiverId);
    const messagesRef = collection(this.firestore, `chats/${chatId}/messages`);
    
    // Add the new message to the chat-specific collection
    await addDoc(messagesRef, {
      text: message,
      senderId: senderId,
      sender: user.displayName || 'Anonymous',
      senderImage: senderImage || 'assets/default-avatar.png',
      receiverId: receiverId, // Store the receiver's ID
      receiverImage: receiverImage || 'assets/default-avatar.png', // Ensure receiver image is stored
      timestamp: new Date(),
      participants: [user.uid, senderId, receiverId], // Store participants (sender and receiver)
    });
  }
  
  // Method to get messages between the current user and a chat partner
  getMessages(currentUserId: string, chatPartnerId: string): Observable<any[]> {
    console.log(currentUserId);
    console.log(chatPartnerId);
    if (!currentUserId || !chatPartnerId) {
      console.warn('Current user ID or chat partner ID is missing');
      return of([]);
    }
  
    const chatId = this.generateChatId(currentUserId, chatPartnerId);
    const messagesRef = collection(this.firestore, `chats/${chatId}/messages`);
    const q = query(messagesRef, orderBy('timestamp'));
    return collectionData(q);
  }
  

  // Method to generate a unique chat ID based on user IDs (to ensure chat uniqueness)
  private generateChatId(userId: string, chatPartnerId: string): string {
    const ids = [userId, chatPartnerId].sort(); // Sort IDs to ensure consistency
    return ids.join('_');
  }

  // 🚀 Get users the current user has chatted with
  async getUsersChattedWith() {
    const user = await firstValueFrom(this.authService.getCurrentUser());
    if (!user) {
      console.log('No user found!');
      return [];
    }

    const userId = user.uid;
    console.log('Current User ID:', userId); // Log current user ID

    const chatsRef = collection(this.firestore, 'chats');
    const q = query(chatsRef, where('participants', 'array-contains', userId));

    try {
      console.log('Running query to fetch chats...');
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log('No chats found!');
        return [];
      }

      const userIds = new Set<string>();
      querySnapshot.forEach((chatDoc) => {
        const chatData = chatDoc.data();
        const participants = chatData['participants'] || [];
        participants.forEach((id: string) => {
          if (id !== userId) {
            userIds.add(id);
          }
        });
      });

      const users = [];
      for (const id of userIds) {
        const userDocRef = doc(this.firestore, 'users', id);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          users.push({ id: userDocSnap.id, ...userDocSnap.data() });
        }
      }

      console.log('Users found:', users);
      return users;

    } catch (error) {
      console.error('Error fetching chats:', error);
      return [];
    }
  }
  
  
  
  
}
