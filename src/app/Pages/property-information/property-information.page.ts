import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { ToastController  } from '@ionic/angular';
import { IonContent, IonHeader, IonActionSheet,IonTitle,IonSelect, IonSelectOption, IonToolbar, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTextarea, IonList, IonItem, IonLabel, IonFooter, IonModal, IonDatetime } from '@ionic/angular/standalone';
import { ServiceRequestService } from 'src/services/service-request.service';
import { Property, PropertyService } from 'src/services/property.service';
import { Auth, User } from '@angular/fire/auth';  // ✅ Import Auth
import { Observable } from 'rxjs';

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.page.html',
  styleUrls: ['./property-information.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal, IonActionSheet,IonLabel, IonItem, IonList, IonTextarea, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PropertyInformationPage implements OnInit {
  step: number = 1; // Controls step navigation
  //selectedProperty: string | undefined; // This will hold the selected property value
  selectedDate_Time: string | null = null;
  showDateTimeModal = false; // Controls the modal visibility
  minDate: string;
  maxDate: string;
  user: User | null = null; // Store the logged-in user
  property: Property[] = [];
  actionSheetButtons: any[] = []; // Initialize the buttons array as empty

  selectedProperty: Property | undefined;
  

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


// cancel() {
//   this.modal.dismiss(null, 'cancel');
// }


  constructor(private toastController: ToastController,private serviceRequestService: ServiceRequestService,private auth: Auth, private propertyService: PropertyService) // ✅ Inject Firebase Auth) 
  {
    let today = new Date();
    let min = new Date();
    min.setDate(today.getDate() + 1); // Tomorrow
    let max = new Date();
    max.setMonth(today.getMonth() + 1); // One month ahead

    this.minDate = min.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    this.maxDate = max.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }

  ngOnInit() {
    console.log("hit button")
    this.auth.onAuthStateChanged(async user => {
      if (user) {
        this.user = user; // Assign the logged-in user details
        console.log("User Details:", this.user);
        await this.loadUserProperties(); // Fetch reviews once the user is authenticated
      } else {
        console.log("No user is logged in.");
      }
    });
  }

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


   // Dynamically load actionSheetButtons from the properties object
   async loadUserProperties() {
    if (!this.user) return;
    console.log('user found');
    try {
      this.property = await this.propertyService.getUserProperties(this.user.uid);
      console.log("User Properties:", this.property);

      // Now that properties are loaded, generate the action sheet buttons
      this.actionSheetButtons = this.property.map(property => ({
        text: property.propertyType, // Set the button text to the property type
        handler: () => {
          this.selectedProperty = property;
          this.step = 2;  // Move to the next step
        },
      }));
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  }

}

