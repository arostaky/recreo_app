import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
declare var FirebasePlugin: any;
FirebasePlugin.subscribe("alumnos");
FirebasePlugin.onNotificationOpen(function(notification) {
  //console.log(notification);
  //alert(notification.title);
  var noticias = document.getElementById("noticias");
  noticias.innerHTML += "<h4>" + notification.title + "</h4>";
  noticias.innerHTML += "<p>" + notification.message + "</p>";
}, function(error) {
  console.error(error);
});
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
}
