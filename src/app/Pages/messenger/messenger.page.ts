import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle,PopoverController,ModalController, IonToolbar, IonButtons, IonBackButton, IonIcon, IonList, IonItem, IonAvatar, IonLabel, IonText, IonFab, IonFabButton, IonModal, IonButton, IonListHeader } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonButton, IonModal, IonFabButton, IonFab, IonText, IonLabel, IonAvatar, IonItem, IonList, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon]
})
export class MessengerPage implements OnInit {


  
  @ViewChild('new_chat')
  modal!: ModalController;
  @ViewChild('popover') popover!: PopoverController;
  segment = 'chats';
  open_new_chat = false;
  users = [
    {id: 1, name: 'NIkhil', photo: 'https://i.pravatar.cc/315'},
    {id: 2, name: 'XYZ', photo: 'https://i.pravatar.cc/325'},
  ];
  chatRooms = [
    {id: 1, name: 'NIkhil', photo: 'https://i.pravatar.cc/315'},
    {id: 2, name: 'XYZ', photo: 'https://i.pravatar.cc/325'},
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.popover.dismiss();
  }

  onSegmentChanged(event: any) {
    console.log(event);
  }

  newChat() {
    this.open_new_chat = true;
  }

  onWillDismiss(event: any) {}

  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(_item: any) {

  }

  getChat(item: { id: any; }) {
    this.router.navigate(['/', 'home', 'chats', item?.id]);
  }

}
