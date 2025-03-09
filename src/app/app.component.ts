
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { Auth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {

    user: User | null = null; // Store the logged-in user
    
  public appPages = [
    { title: 'Dashboard', url: '/dashboard' },
    { title: 'Offers [Not done]', url: '/folder/offers' },
    { title: 'Alerts [Not done]', url: '/folder/outbox'},
    { title: 'Messages', url: '/messenger'},
    { title: 'Service History [Not done]', url: '/folder/service'},
    { title: 'Switch Accounts???? [Not done]', url: '/folder/switch'},
    { title: 'Log out [Not done]', url: '/folder/spam'},
    { title: 'View users [Testing purposes]', url: '/users'},
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(private router: Router,private auth: Auth) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
  
  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user; // Assign the logged-in user details
        console.log("User Details:", this.user);
      } else {
        console.log("No user is logged in.");
      }
    });
  }

  navigateSettings() {
    this.router.navigate(['/profile']);
  }
}
