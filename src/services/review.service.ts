import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, orderBy,query, where, getDocs } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Timestamp } from '@angular/fire/firestore';

export interface Review {
  id?: string;
  userId: string;
  recipient: string;
  serviceId: string;
  userName:string;
  message: string;
  stars: number;
  createdAt: Date | Timestamp;  // 🔹 Allow both Date and Timestamp
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  // Add a review
  async addReview(serviceId: string, message: string, stars: number) {
    const user = this.auth.currentUser;

    // Check if user is logged in
    if (!user) {
      throw new Error("User not logged in");
    }

    // Prepare the review object
    const review: Review = {
      userId: user.uid,
      userName: user.displayName || 'Anonymous',
      recipient: 'holder',
      serviceId,
      message,
      stars,
      createdAt: Timestamp.now(),
    };

    // Reference to the Firestore 'reviews' collection
    const reviewsRef = collection(this.firestore, 'reviews');

    try {
      // Add review document to Firestore
      const docRef = await addDoc(reviewsRef, review);
      console.log("Review successfully added with ID:", docRef.id);  // Log the document ID for confirmation
      return docRef.id;  // Return the document ID, if needed for further processing (e.g., showing a success message).
    } catch (error) {
      console.error("Error adding review:", error);
      throw new Error("Error adding review: " + error);  // Display meaningful error
    }
  }

  // Get all reviews for a specific service
  getServiceReviews(serviceId: string): Observable<Review[]> {
    const reviewsRef = collection(this.firestore, 'reviews');
    const q = query(reviewsRef, where('serviceId', '==', serviceId));
    
    return collectionData(q, { idField: 'id' }).pipe(
      map(reviews =>
        reviews.map(review => ({
          ...review,
          createdAt: (review['createdAt'] as Timestamp)?.toDate() || new Date(),
        }))
      )
    ) as Observable<Review[]>;
  }

  // Get all reviews received by a specific user
  async getUserReviews(userId: string): Promise<Review[]> {
    console.log('Fetching reviews for userId:', userId);
  
    const reviewsRef = collection(this.firestore, 'reviews');
    const q = query(reviewsRef, where('recipient', '==', userId)); // Removed orderBy
  
    const querySnapshot = await getDocs(q);
  
    console.log('Found', querySnapshot.size, 'reviews'); // Debugging
  
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      console.log('Review data:', data); // Log data to debug
  
      return {
        id: doc.id,
        ...data,
        createdAt: data['createdAt'] instanceof Timestamp ? data['createdAt'].toDate() : new Date(),
      } as Review;
    });
  }
  
}
