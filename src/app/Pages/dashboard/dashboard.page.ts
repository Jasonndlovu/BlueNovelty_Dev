import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { Review, ReviewService } from '../../../services/review.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonMenuButton, IonList, IonItem, IonLabel, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,

  imports: [IonLabel, IonItem, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonMenuButton]

})
export class DashboardPage implements OnInit {

  user: User | null = null; // Store the logged-in user
  reviews: Review[] = [];

  constructor(private auth: Auth,private reviewService: ReviewService)

  constructor(private auth: Auth,private reviewService: ReviewService) {}
  //constructor(private auth: Auth,private reviewService: ReviewService) {}
  businessServices = [
    { title: 'Creative & Graphic Design', image: 'https://s3-alpha-sig.figma.com/img/dff2/1408/60ca27942149a1a9ee7a2042e54bfe1e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qr6SUlYm1TkqjTJ5d5pK3Z2EVdkkrbbUIzT9dfVvdUJw5Ztr26N~GG4FUiOP1LpXIbaGk8e7fX4IKojq00e2-SSLTSDt6fnTbPnP5hpvD1kUl2v5srkHmyYPN7CyOsROJr1T-z9bYPCrycwiGl9bSVJQXtp8pSVST9rnaIXRHGYP2f7OYyILLkfZW7vkmc9JqUkb6vkEXTqaJfj5sN5ptU0WNbIE834Oae~3mLXQZTGYq6wSIH1njUJl4-AtWMHzurma2S3W5Ri59NPHsCWP7tCnuBlX4TU-r5VHDa4GwVLec2rKtu85ugUVvrm3-co5bTpQAsUu54qISZzYH4x9hg__', label: 'Coming Soon' },
    { title: 'Sales & Marketing', image: 'https://s3-alpha-sig.figma.com/img/5466/43b8/9145ec71cfe669418f8889174569b6de?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nocwHg3frE19n~XqyvK3KjKDaM0qicmRhqP7jTl4b1CnfP~8woVLDkABW6NEzRSRzUcMZBYilrhE1kPmQX5tER1~zy2BaKOm0ruNMtuuVVu5gdL1DJFscAHtPwH3Oy706MjdULRqlMCUU4REorxPuwnzeYldShK3wzRCnK9LuiSjNXGQQAypdqU3SHZ-UpglhI6-9wNuQT74YS85R2D7UZYI6snlFi6JEVAeWZ9F~znHfjcKTvbkW1Gczygy~plb1auw1hhhaZXUuOA-w7BOL75MsLSeC4JSLH-b82vbI9WwhzTJu92SAwgs66a~nX1lnJ2F51EoIWixVIAjSMsXGg__', label: 'Coming Soon' }
  ];

  householdServices = [
    { title: 'Cleaning Services', image: 'https://s3-alpha-sig.figma.com/img/f0e5/4665/e7e779de4238d7d5a9b9af539b0086b0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j44k30FNWiYMaErjnrD2V3bLX8TrswiN4Z~Qm-kTGGO9BrgkNKVXRuZRHJzhtpPm4vstYA7lGYdTdcf4-52ote6ZsaT3EBOv9WHnFMhqKr~mvxPErfo5hf9~vyK0q7GnxfKQWJseas2GAy~mvENM7QaXg9msCNRur4u3sTZtGeLRMrItrBZBSmxGHqqMqtn8l-AS4otiSdEthOZ9lnVx9jFhFtydxFcBBExAa4zWQPoP6dSYs0sjm7pKpGnZ-Alk63i1S~12xKoCPsLRElynM7GP5eSOtjd-C7BrVCgovqjnPXLGrEiJlGr2kyv2fnaTDmSmH1tSHEK7zdSA5YtE7Q__', label: 'NEW' },
    { title: 'Live Streaming & On-Demand', image: 'https://s3-alpha-sig.figma.com/img/4633/bf14/caa2fb5dbe60f181a02ba850d485dfc1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aUbmdnFYX1L5gw1IX5C3LUdnTGaUDdNuA1-cEUIqHxtOyQeMRJLLg23enaESwjuFYLbIkylHnFVJadO7AecbK1WE9-39V3t2pdNS67GhXwvv~ABcjt7KQl5N6KpxUlCXUpxm~JQcb~6ksmS3-VMmqYmplNY1OcQpvdoHd4-MDMWayj~CBXENiY-s7QfB5eSVg1aPxvM4yV~0R0Z6kilNKx-gfzC3RQovkxjBFNIxPRAu05zwvAyXR9eie71YzDsxBy5D-MFYqiB3JSUFJ6qgwReDOIWFr5SfjG71NsS9koMLCUcNn4RzjJq9VefDEskRa8rsGzJ8n9vJiPIoSIrFsA__', label: 'Coming Soon' }
  ];
  ngOnInit() {
    this.auth.onAuthStateChanged(async user => {
      if (user) {
        this.user = user; // Assign the logged-in user details
        console.log("User Details:", this.user);
        await this.loadUserReviews(); // Fetch reviews once the user is authenticated
      } else {
        console.log("No user is logged in.");
      }
    });

  async loadUserReviews() {
    console.log('this.user:'+ this.user)
    if (!this.user) return;
    console.log('user found')
    try {
      this.reviews = await this.reviewService.getUserReviews(this.user.uid);
      console.log("User Reviews:", this.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }

  }


  async loadUserReviews() {
    console.log('this.user:'+ this.user)
    if (!this.user) return;
    console.log('user found')
    try {
      this.reviews = await this.reviewService.getUserReviews(this.user.uid);
      console.log("User Reviews:", this.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  }
}
