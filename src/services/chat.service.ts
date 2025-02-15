import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, orderBy, query, collectionData } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs'; // Add this import

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  async sendMessage(message: string, senderId: string, senderImage: string) {
    const user = await firstValueFrom(this.authService.getCurrentUser());
  
    if (!user) {
      console.error('User not authenticated');
      return;
    }
  
    const messagesRef = collection(this.firestore, 'messages');
    await addDoc(messagesRef, {
      text: message,
      senderId: senderId,
      sender: user.displayName || 'Anonymous',
      senderImage: senderImage || 'assets/default-avatar.png',
      timestamp: new Date(),
    });
  }
  

  getMessages(): Observable<any[]> {
    const messagesRef = collection(this.firestore, 'messages');
    const q = query(messagesRef, orderBy('timestamp'));
    return collectionData(q);
  }
}
