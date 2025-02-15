import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, authState, User, OAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.auth, provider);
    
    if (result.user) {
      await this.saveUserData(result.user);
    }
    return result;
  }

  async loginWithApple() {
    const provider = new OAuthProvider('apple.com');
    
    const result = await signInWithPopup(this.auth, provider);
    
    if (result.user) {
      await this.saveUserData(result.user);
    }
    return result;
  }

  async loginWithEmail(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      
      if (result.user) {
        await this.saveUserData(result.user);
      }
      return result;
    } catch (error) {
      console.error('Error logging in with email and password:', error);
      throw error;
    }
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

  async logout() {
    return signOut(this.auth);
  }

  getCurrentUser(): Observable<User | null> {
    return authState(this.auth); // This ensures it is correctly accessed
  }
}


//https://mypwa-1e7f2.firebaseapp.com/__/auth/handler