import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../../../services/auth.service'// Adjust the path as needed
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBadge, IonButtons, IonBackButton, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonRow, IonCol, IonModal } from '@ionic/angular/standalone';
import { AvailableJobsService, requestedService } from 'src/services/available-jobs.service';
import { DatePipe } from '@angular/common';  // Import DatePipe
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-available-jobs',
  templateUrl: './available-jobs.page.html',
  styleUrls: ['./available-jobs.page.scss'],
  standalone: true,
  imports: [IonModal, IonCol,IonRow, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonBackButton, IonButtons, IonBadge, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [DatePipe]  // Provide DatePipe here
})
export class AvailableJobsPage implements OnInit {
  // jobs = [
  //   { name: 'Sanny Mbane', status: 'New', price: 'R 500', day: 'Thurs' },
  //   { name: 'Trevor Sindane', status: 'New', price: 'R 500', day: 'Tues | 07:00' },
  //   { name: 'Thebe Mokotedi', status: 'Declined', price: 'R 800', day: 'Wed | 08:00' },
  //   { name: 'Daniel Wellington', status: 'Accepted', price: 'R 450', day: 'Mon | 08:00' },
  //   { name: 'Andrew Tate', status: 'Pending', price: 'R 600', day: 'Every Mon' }
  // ];
  user: User | null = null; // Store the logged-in user's details
  jobs: requestedService[] = [];  // Declare a jobs array to hold the fetched data
  userNames: { [key: string]: string } = {};  // Object to store user names by userId
  isModalOpen = false;
  selectedJob: requestedService | undefined;


  constructor(private availableJobsService: AvailableJobsService,private datePipe: DatePipe, private authService: AuthService) { }

  ngOnInit() {
    this.fetchUserDetails();
    this.getAvailableJobs();  // Fetch available jobs on component initialization
  }
  // Function to format the date
  formatScheduledDate(date: Date | string): string {
    return this.datePipe.transform(date, 'HH:mm yyyy-MM-dd') || '';
  }

  // Fetch the available jobs by calling the service method
  getAvailableJobs() {
    this.availableJobsService.getServiceReviews().subscribe(
      (data) => {
        this.jobs = data;  // Assign the fetched jobs to the jobs array
        // Fetch user names for each job and store them
        this.fetchUserNames();
      },
      (error) => {
        console.error('Error fetching available jobs:', error);  // Handle any errors
      }
    );
  }


  // Fetch user names for each job and store them in the userNames object
  fetchUserNames() {
    this.jobs.forEach((job) => {
      if (job.userId && !this.userNames[job.userId]) {
        this.availableJobsService.getUserName(job.userId).subscribe((name) => {
          this.userNames[job.userId] = name;  // Store the user name
        });
      }
    });
  }

// Accept job and update its status
acceptJob(job: requestedService, user: User | null) {
  if (!user) {
    console.error('User is not logged in');
    return;  // Exit early if user is null
  }

  if (!job.id) {
    console.error('Job ID is undefined');
    return;  // Exit early if job.id is undefined
  }

  // Proceed with updating the job status
  this.availableJobsService.updateJobStatus(job.id, user).then(() => {
    console.log(`Job ${job.id} has been accepted and updated.`);
    job.isAvailable = false;
    job.cleanerID = user.uid; // Set the cleanerID to the logged-in user's UID
  }).catch((error) => {
    console.error('Error accepting the job:', error);
  });
}





  declineJob(job: requestedService) {
    // Handle declining the job
    job.isAvailable = true;
    console.log(`Declined job: ${job.id}`);
    // You can make an API call to update the status in the database here
  }

  fetchUserDetails() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  // Open the modal with job details
  viewInfo(job: requestedService) {
    this.selectedJob = job; // Set the selected job data
    this.isModalOpen = true; // Open the modal
  }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
  }
}
