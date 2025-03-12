import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';  // Ensure Firestore is imported correctly
import { environment } from 'src/environments/environment';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class UserProfilePage implements OnInit {
  user: User | null = null;
  userEmail: string | null = null;
  displayName: string | null = null;
  photoURL: string | null = null;
  createdAt: string | null = null;
  cleanerProfile: any = {};  // Will hold additional cleaner profile data

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestore: Firestore  // Ensure this is injected correctly and Firestore is properly set up
  ) {}

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

  async ngOnInit() {
    this.authService.getCurrentUser().subscribe(async user => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.user = user;
        this.userEmail = user.email;
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.createdAt = user.metadata.creationTime
          ? new Date(user.metadata.creationTime).toLocaleString()
          : 'Unknown';

        // Fetch cleaner profile data from Firestore
        await this.loadCleanerProfile(user.uid);
      }
    });
  }

  async loadCleanerProfile(uid: string) {
    try {
      const docRef = doc(this.firestore, 'cleaners', uid);  // Firestore's doc function
      const docSnap = await getDoc(docRef);  // Get document snapshot

      if (docSnap.exists()) {
        this.cleanerProfile = docSnap.data();
      } else {
        console.log('No cleaner profile found');
      }
    } catch (error) {
      console.error('Error fetching cleaner profile:', error);
    }
  }
}
