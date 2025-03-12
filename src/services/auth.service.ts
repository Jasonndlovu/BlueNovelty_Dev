import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, authState, User, OAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);

  private userEmail = new BehaviorSubject<string | null>(null);
  private userName = new BehaviorSubject<string | null>(null);

  userEmail$ = this.userEmail.asObservable();
  userName$ = this.userName.asObservable();
  router: any;

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    
    if (result.user) {
      this.setUserData(result.user);
      await this.saveUserData(result.user);
    }
    return result;
  }

  async loginWithApple() {
    const provider = new OAuthProvider('apple.com');
    const result = await signInWithPopup(this.auth, provider);
    
    if (result.user) {
      this.setUserData(result.user);
      await this.saveUserData(result.user);
    }
    return result;
  }

  async loginWithEmail(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      
      if (result.user) {
        this.setUserData(result.user);
        await this.saveUserData(result.user);
      }
      return result;
    } catch (error) {
      console.error('Error logging in with email and password:', error);
      throw error;
    }
  }

  async logout() {
    await signOut(this.auth);
    this.clearUserData();
  }

  async sendPasswordResetEmail(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email);
      return true; // Indicates success
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw error; // Re-throw the error for handling in the component
    }
  }

  private setUserData(user: User) {
    this.userEmail.next(user.email);
    this.userName.next(user.displayName);
    localStorage.setItem('userEmail', user.email || '');
    localStorage.setItem('userName', user.displayName || '');
  }

  private clearUserData() {
    this.userEmail.next(null);
    this.userName.next(null);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
  }

  async saveUserData(user: User) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || '',
        createdAt: new Date()
      });
    }
  }

  getCurrentUser(): Observable<User | null> {
    return authState(this.auth);
  }

  loadUserFromStorage() {
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    if (storedEmail) this.userEmail.next(storedEmail);
    if (storedName) this.userName.next(storedName);
  }
}
