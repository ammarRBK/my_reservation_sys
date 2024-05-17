import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {
  username!: string;
  password!: string;
  constructor(private router: Router) {}
  
  login(){ 
      if('OdaiWaMahmoud' === this.username){
        if(this.password == 'U2PWp*eMQ8VC5JT'){
          this.router.navigateByUrl('reservsyslogin')
        }else{
          console.log("wrong password");
        }
      }else{
        console.log('wrong username');
      }
  }
}
