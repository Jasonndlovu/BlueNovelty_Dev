import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { Auth, User, authState } from '@angular/fire/auth';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UsersListPage implements OnInit {
  users$: Observable<any[]>;
  currentUser: User | null = null;

  constructor(private auth: Auth, private firestore: Firestore) {
    const usersRef = collection(firestore, 'users');
    this.users$ = collectionData(usersRef, { idField: 'id' });

    // Get current user asynchronously
    authState(this.auth).subscribe(user => {
      this.currentUser = user;
      console.log('Current user:', user); // Debugging
    });
  }

  ngOnInit() {}

  startChat(user: any) {
    console.log(this.currentUser);

    if (this.currentUser) {
      console.log(`/chat/${this.currentUser.uid}-${user.uid}`);
      window.location.href = `/chat/${this.currentUser.uid}-${user.uid}`;
    }
  }
}
