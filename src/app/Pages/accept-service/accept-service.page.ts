import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-accept-service',
  templateUrl: './accept-service.page.html',
  styleUrls: ['./accept-service.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AcceptServicePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
