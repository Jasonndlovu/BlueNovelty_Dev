import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonTextarea, IonCheckbox, IonIcon, IonInput } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ IonIcon, IonTextarea, IonButton, IonContent, FormsModule]
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  displayName = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.authService.loadUserFromStorage();
    this.authService.userEmail$.subscribe(email => {
      if (email) this.email = email;
    });
    this.authService.userName$.subscribe(name => {
      if (name) this.displayName = name;
    });
  }

  async loginGoogle() {
    const result = await this.authService.loginWithGoogle();
    if (result.user) {
      const role = await this.authService.getUserRole(result.user.uid);
      this.redirectUser(role);
    }
  }

  async loginApple() {
    const result = await this.authService.loginWithApple();
    if (result.user) {
      const role = await this.authService.getUserRole(result.user.uid);
      this.redirectUser(role);
    }
  }

  async login() {
    try {
      const result = await this.authService.loginWithEmail(this.email, this.password);
      if (result.user) {
        const role = await this.authService.getUserRole(result.user.uid);
        this.redirectUser(role);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  async forgotPassword() {
    if (!this.email) {
      this.showAlert('Error', 'Please enter your email address.');
      return;
    }

    try {
      await this.authService.sendPasswordResetEmail(this.email);
      this.showAlert('Success', 'Password reset email sent. Please check your inbox.');
    } catch (error) {
      this.showAlert('Error', 'Failed to send password reset email. Please check your email address and try again.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  redirectUser(role: string | null) {
    if (!role) {
      this.router.navigate(['/landing']); // No role set, return to landing page
      return;
    }
    
    if (role === 'user') {
      this.router.navigate(['/dashboard']);
    } else if (role === 'service-provider') {
      this.router.navigate(['/cleaner-profile']);
    }
  }
}
