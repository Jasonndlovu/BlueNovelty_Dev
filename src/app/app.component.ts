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
    { title: 'Available Jobs', url: '/available-jobs'},
    { title: 'Accept Job', url:'/accept-job'},
    { title: 'Accept Service', url:'/accept-service'},
    { title: 'Messages', url: '/messenger'},
    { title: 'Service History [Not done]', url: '/folder/service'},
    { title: 'View users [Testing purposes]', url: '/users'},
    { title: 'User Profile', url: '/user-profile'},
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']; 
  
  constructor(private router: Router,private auth: Auth) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
  
  ngOnInit() {
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    const storedRole = localStorage.getItem('userRole');

    if (storedEmail || storedName || storedRole) {
      this.user = {
        email: storedEmail,
        displayName: storedName,
        role: storedRole
      } as any;
      console.log("User Details from Local Storage:", this.user);
    } else {
      console.log("No user data found in Local Storage.");
    }
  }

  navigateSettings() {
    this.router.navigate(['/profile']);
  }
}
