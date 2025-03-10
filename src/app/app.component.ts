import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { AuthService } from '../services/auth.service';  // Ensure the path is correct

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard' },
    { title: 'Offers [Not done]', url: '/folder/offers' },
    { title: 'Alerts [Not done]', url: '/folder/outbox'},
    { title: 'Messages', url: '/messenger'},
    { title: 'Service History [Not done]', url: '/folder/service'},
    { title: 'Switch Accounts???? [Not done]', url: '/folder/switch'},
    { title: 'Log out [Not done]', url: '/folder/spam'},
    { title: 'View users [Testing purposes]', url: '/users'},
    { title: 'Cleaner Profile', url: '/cleaner-profile'},
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public userName: string | null = null;  // Store the user name

  constructor(private router: Router, private authService: AuthService) {
    addIcons({
      mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, 
      archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, 
      bookmarkOutline, bookmarkSharp
    });

    // Subscribe to the userName$ observable to get the updated name
    this.authService.userName$.subscribe((name: string | null) => {
      this.userName = name;  // Update the userName whenever it changes
    });
  }

  navigateSettings() {
    this.router.navigate(['/profile']);
  }
}
