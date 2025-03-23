import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, authState, User, OAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);

  private userEmail = new BehaviorSubject<string | null>(null);
  private userName = new BehaviorSubject<string | null>(null);
  private userRole = new BehaviorSubject<string | null>(null);

  userEmail$ = this.userEmail.asObservable();
  userName$ = this.userName.asObservable();
  userRole$ = this.userRole.asObservable();
  router: any;

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

      const role = localStorage.getItem('userRole'); // Get stored role
      if (!role) {
        throw new Error('Role not found in local storage');
      }

      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || '',
        role: role, // Save role permanently
        createdAt: new Date()
      });

      localStorage.removeItem('userRole'); // Remove after saving
    }
  }

  async logout() {
    return signOut(this.auth);
  }

  getCurrentUser(): Observable<User | null> {
    return authState(this.auth); // This ensures it is correctly accessed
  }


  loadUserFromStorage() {
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    if (storedEmail) this.userEmail.next(storedEmail);
    if (storedName) this.userName.next(storedName);
  }

  async getUserRole(uid: string): Promise<string | null> {
    const userRef = doc(this.firestore, `users/${uid}`);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data()?.['role'] || null : null;
  }

  async setUserRole(role: 'user' | 'service-provider') {
    const currentUser = this.auth.currentUser;
    if (!currentUser) return;

    const userRef = doc(this.firestore, `users/${currentUser.uid}`);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists() || !userSnap.data()?.['role']) {
      await setDoc(userRef, { role }, { merge: true }); // Store role in Firestore
      localStorage.setItem('userRole', role); // Store in localStorage
      this.userRole.next(role); // Update observable
    }
  }
}


//https://mypwa-1e7f2.firebaseapp.com/__/auth/handler