import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {
  username!: string;
  password!: string;
  constructor() {}
  
  login(){
    console.log(this.username, this.password)
  }
}
