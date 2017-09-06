import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var FirebasePlugin: any;
FirebasePlugin.subscribe("alumnos");
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
