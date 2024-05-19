import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonText } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonItem, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {
  username!: string;
  password!: string;
  errorMessage: string='';
  constructor(private router: Router) {}
  
  login(){ 
      if('OdaiWaMahmoud' === this.username){
        if(this.password == 'U2PWp*eMQ8VC5JT'){
          this.router.navigateByUrl('reservsyslogin');
        }else{
          this.errorMessage= "كلمة سر خاطئة";
          setTimeout(() => {
            this.errorMessage= "";
          }, 3000);
          console.log("wrong password");
        }
      }else{
        this.errorMessage= "اسم مستخدم خاطئ";
        console.log('wrong username');
        setTimeout(() => {
          this.errorMessage= "";
        }, 3000);
      }
  }
}
