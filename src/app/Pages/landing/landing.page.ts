import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class LandingPage {
  constructor(private router: Router, private authService: AuthService) {}

  selectRole(role: 'user' | 'service-provider') {
    localStorage.setItem('userRole', role); // Save role temporarily
    this.router.navigate(['/onboarding']); // Redirect to login page
  }
}
