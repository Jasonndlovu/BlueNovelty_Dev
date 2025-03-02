import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../../../services/auth.service'// Adjust the path as needed
import { IonContent, IonHeader, IonToolbar, IonButtons, IonAvatar, IonButton, IonIcon  , IonMenuButton } from '@ionic/angular/standalone';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonAvatar, IonButtons, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonMenuButton,]
})
export class ProfilePage implements OnInit {

  user: User | null = null; // Store the logged-in user's details
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  navigateSettings() {
    this.router.navigate(['/profile-settings']);
  }

}
