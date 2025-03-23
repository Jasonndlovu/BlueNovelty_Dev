import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, orderBy,query, where, getDocs } from '@angular/fire/firestore';
import { Auth, getAuth, User} from '@angular/fire/auth';
import { doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from './property.service';


export interface requestedService {
  id?: string;
  userId: string;
  // serviceId: string;
  selectedProperty: Property | undefined;  // Use the Property interface here
  selectedExtras: string;
  selectedTimeAndDate: string;
  isAvailable : boolean; 
  cleanerID: string;
  createdAt: Date | Timestamp;  // Allow both Date and Timestamp
}


@Injectable({
  providedIn: 'root'
})
export class AvailableJobsService {

  constructor(private firestore: Firestore, private auth: Auth) { }

// Get all reviews for a specific service and filter by isAvailable: true
getServiceReviews(): Observable<requestedService[]> {
  const requestedServiceRef = collection(this.firestore, 'service-requests');
  const q = query(
    requestedServiceRef,
    where('isAvailable', '==', true)  // Adding the filter for isAvailable
  );
  
  console.log('here is q: ' + q);

  return collectionData(q, { idField: 'id' }).pipe(
    map(requestedService =>
      requestedService.map(requestedService => ({
        ...requestedService,
        createdAt: (requestedService['createdAt'] as Timestamp)?.toDate() || new Date(),
      }))
    )
  ) as Observable<requestedService[]>;
}


// Fetch user name by userId
getUserName(userId: string): Observable<string> {
  const userRef = doc(this.firestore, 'users', userId);  // Assuming the user data is stored in the 'users' collection
  return from(getDoc(userRef)).pipe(
    map((docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        return userData?.['displayName'] || 'Unknown';  // Assuming the user document contains a 'name' field
      } else {
        return 'Unknown';
      }
    })
  );
}

  // Update the job status when it's accepted
  updateJobStatus(jobId: string, user: User): Promise<void> {
    // Use doc() to get the reference to the specific job document
    const jobRef = doc(this.firestore, 'service-requests', jobId);

    return updateDoc(jobRef, {
      isAvailable: false,  // Set job as unavailable
      cleanerID: user.uid,  // Set the cleanerID to the logged-in user's UID
    });
  }

}
