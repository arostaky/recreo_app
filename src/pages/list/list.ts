import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare var FirebasePlugin: any;
FirebasePlugin.getToken(function(token) {
  // save this server-side and use it to push notifications to this device
  console.log(token);
}, function(error) {
  console.error(error);
});
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['microphone', 'musical-note', 'musical-notes', 'play'];

    this.items = [];
    for (let i = 22; i < 29; i++) {
      this.items.push({
        title: 'Aulas ' + i,
        note: 'Aula #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
    //var elements= document.querySelectorAll('#toggle-3-0');
    console.log('item Tapped ok!' + item);
    FirebasePlugin.subscribe("Aula26");
  }
}
