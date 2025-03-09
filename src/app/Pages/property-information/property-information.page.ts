import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { ToastController  } from '@ionic/angular';
import { IonContent, IonHeader, IonActionSheet,IonTitle,IonSelect, IonSelectOption, IonToolbar, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTextarea, IonList, IonItem, IonLabel, IonFooter, IonModal, IonDatetime } from '@ionic/angular/standalone';
import { ServiceRequestService } from 'src/services/service-request.service';
import { Auth } from '@angular/fire/auth';  // ✅ Import Auth

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.page.html',
  styleUrls: ['./property-information.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal, IonActionSheet,IonLabel, IonItem, IonList, IonTextarea, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PropertyInformationPage implements OnInit {
  step: number = 1; // Controls step navigation
  selectedProperty: string | undefined; // This will hold the selected property value
  selectedDate_Time: string | null = null;
  showDateTimeModal = false; // Controls the modal visibility
  minDate: string;
  maxDate: string;

  // For time validation
  isTimeValid: boolean = true;  // Track time validity

  restrictedStartTime: string = '09:00';
  restrictedEndTime: string = '17:00';

  extras = [
    { name: 'Ironing', icon: 'shirt-outline', selected: false},
    { name: 'Inside Fridge', icon: 'snow-outline', selected: false },
    { name: 'Garage', icon: 'car-outline', selected: false },
    { name: 'Inside Cabinets', icon: 'briefcase-outline', selected: false },
    { name: 'Interior Windows', icon: 'albums-outline', selected: false },
    { name: 'Interior Walls', icon: 'business-outline', selected: false },
    { name: 'Laundry', icon: 'water-outline', selected: false },
  ];

 // Define the action sheet buttons
 public actionSheetButtons = [
  {
    text: 'House',
    handler: () => {
      this.selectedProperty = 'House'; // Set selectedProperty to 'House'
      this.step = 2;
    },
  },
  {
    text: 'Apartment/Flat',
    handler: () => {
      this.selectedProperty = 'Apartment/Flat'; // Set selectedProperty to 'Apartment/Flat'
      this.step = 2;
    },
  },
  {
    text: 'Office',
    handler: () => {
      this.selectedProperty = 'Office'; // Set selectedProperty to 'Office'
      this.step = 2;
    },
  },
];

// cancel() {
//   this.modal.dismiss(null, 'cancel');
// }

  constructor(private toastController: ToastController,private serviceRequestService: ServiceRequestService,private auth: Auth) // ✅ Inject Firebase Auth) 
  {
    let today = new Date();
    let min = new Date();
    min.setDate(today.getDate() + 1); // Tomorrow
    let max = new Date();
    max.setMonth(today.getMonth() + 1); // One month ahead

    this.minDate = min.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    this.maxDate = max.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }

  ngOnInit() {}

  validateTime(event: any) {
    const selectedDateTime = new Date(event.detail.value);
    const selectedTime = selectedDateTime.toTimeString().split(' ')[0]; // Get the time part of the datetime

    if (selectedTime < this.restrictedStartTime || selectedTime > this.restrictedEndTime) {
      console.log('This time is restricted');
      this.selectedDate_Time = null; // Reset the time if it is restricted
      this.isTimeValid = false; // Set validity to false
    } else {
      this.isTimeValid = true; // Time is valid
    }
  }

  isWeekday = (dateString: string): boolean => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6; // Exclude Sunday (0) and Saturday (6)
  };

  openDateTimePicker() {
    this.showDateTimeModal = true;
  }

  closeDateTimePicker() {
    this.showDateTimeModal = false;
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duration for which the toast will be displayed
      position: 'top', // Position of the toast
      color: 'danger', // You can change the color if needed
    });
    toast.present();
  }

  confirmSelection() {
    console.log("Selected Date:", this.selectedDate_Time);

    if (this.selectedDate_Time != null) {
      const selectedDateTime = new Date(this.selectedDate_Time);
      const selectedTime = selectedDateTime.toTimeString().split(' ')[0]; // Get the time part of the datetime

      // Check if the selected time is within the allowed range
      if (selectedTime < this.restrictedStartTime || selectedTime > this.restrictedEndTime) {
        console.log('Time is outside the allowed range');
        this.showToast('Selected time is outside the allowed range! 09:00 - 17:00');
        this.isTimeValid = false;  // Set the time validity to false
      } else {
        this.isTimeValid = true;  // Time is valid
        this.showDateTimeModal = false;
      }
    } else {
      this.showToast('Please select a valid date and time! 09:00 - 17:00');
    }
  }

  onCheckboxChange(extra: any) {
    extra.selected = !extra.selected; // Toggle selection state
  }

  async getCleaner() {

    const selectedExtras = this.extras
      .filter(extra => extra.selected)
      .map(extra => extra.name)
      .join(", "); // Join selected extras into a comma-separated string

    try {
      const docId = await this.serviceRequestService.createServiceRequest({
        userId: this.auth.currentUser?.uid,
        selectedProperty: this.selectedProperty,
        selectedExtras: selectedExtras,
        selectedTimeAndDate: this.selectedDate_Time,
        createdAt: new Date(),
      });
      console.log("Service request created with ID:", docId);
      const toast = await this.toastController.create({
        message: "A job post has been created, you will be notified as soon as it is accepted by a cleaner",
        duration: 2000, // Duration for which the toast will be displayed
        position: 'top', // Position of the toast
        color: 'success', // You can change the color if needed
      });
      toast.present();
    } catch (error) {
      console.error("Error creating service request:", error);
    }
  }
  

}

