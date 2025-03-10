import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc, getFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cleaner-profile',
  templateUrl: './cleaner-profile.page.html',
  styleUrls: ['./cleaner-profile.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CleanerProfilePage implements OnInit {
  cleanerProfileForm: FormGroup;
  firestore: Firestore;

  constructor(private fb: FormBuilder) {
    // Initialize Firebase app and Firestore
    const app = initializeApp(environment.firebaseConfig);
    this.firestore = getFirestore(app);

    this.cleanerProfileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.cleanerProfileForm.valid) {
      try {
        await addDoc(collection(this.firestore, 'cleaners'), this.cleanerProfileForm.value);
        alert('Profile saved successfully!');
      } catch (error) {
        console.error('Error saving data:', error);
        alert('Error saving profile. Please try again.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
