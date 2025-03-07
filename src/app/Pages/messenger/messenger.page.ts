import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, PopoverController, ModalController, IonToolbar, IonButtons, IonBackButton, IonIcon, IonList, IonItem, IonAvatar, IonLabel, IonText, IonFab, IonFabButton, IonModal, IonButton, IonListHeader } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { ChatService } from './../../../services/chat.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonText, IonLabel, IonAvatar, IonItem, IonList, IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon]
})
export class MessengerPage implements OnInit {
  chatUsers: any[] = [];
  isLoading: boolean = true;  // Added loading state

  constructor(private router: Router, private chatService: ChatService) {}

  async ngOnInit() {
    this.loadChatUsers();
  }

  async loadChatUsers() {
    try {
      this.isLoading = true;  // Show loading state
      this.chatUsers = await this.chatService.getUsersChattedWith();
      console.log(this.isLoading);  // Debug to check the result
      console.log(this.chatUsers);  // Debug to check the result
    } catch (error) {
      console.error("Error loading chat users: ", error);
    } finally {
      this.isLoading = false;  // Hide loading state once data is loaded
    }
  }

  openChat(user: any) {
    this.router.navigate(['/', 'home', 'chats', user?.id]);
  }
}
