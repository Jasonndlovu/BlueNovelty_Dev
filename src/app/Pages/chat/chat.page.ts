import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton, IonInput, IonList, IonItem, IonButtons, IonBackButton, IonItemGroup, IonFabButton, IonIcon, IonSpinner, IonAvatar } from '@ionic/angular/standalone';
import { ChatService } from './../../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonSpinner, IonIcon, IonFabButton, IonItemGroup, IonBackButton, IonButtons, IonItem, IonList, IonFooter, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatPage implements OnInit {
  messages$: Observable<any[]> | undefined;
  newMessage = '';
  currentUserId: string = '';
  currentUserImage: string = 'https://i.pravatar.cc/315';
  chatPartnerName: string = 'Chat Partner';
  chatPartnerImage: string = 'https://i.pravatar.cc/325';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messages$ = this.chatService.getMessages();
    if (!this.messages$) {
      console.error('Error: messages$ is undefined. Ensure ChatService returns an observable.');
    }
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage(this.newMessage, this.currentUserId, this.currentUserImage)
        .then(() => {
          this.newMessage = '';
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
    }
  }
  
}
