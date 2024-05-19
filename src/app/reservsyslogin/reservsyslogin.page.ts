import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-reservsyslogin',
  templateUrl: './reservsyslogin.page.html',
  styleUrls: ['./reservsyslogin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [InAppBrowser]
})
export class ReservsysloginPage implements OnInit {
  
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
    this.iab.create('https://reg.nid-moi.gov.iq/','_self','location=no,fullscreen=no')
  }

}
