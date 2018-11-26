import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  searchQuery: string = '';
  fullItems;
  items;
  itemsBackup;

  constructor (private router: Router, private fire: FirebaseService) {

  }

  ngOnInit () {
    this.populateItems ();
  }

  ionViewDidEnter () {
    // this.populateItems ();
    console.log ('hola123')
  }

  populateItems () { //  PONER TODOS LOS QUE NO SEAN neededS
    var arrayItems = new Array ()
    this.fire.getHomeItems ().then (items => {
      this.fullItems = items;
      this.fullItems.forEach (item => {
        arrayItems.push (item.name)
      })
      this.items = arrayItems;
      this.itemsBackup = arrayItems;
    })
  }

  restoreItems () {
    this.items = this.itemsBackup;
  }

  getItems (ev: any) {
    // Reset items back to all of the items
    this.restoreItems ();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim () != '') {
      this.items = this.items.filter ((item) => {
        return (item.toLowerCase ().indexOf (val.toLowerCase ()) > -1);
      })
    }
  }

  selectItem (item) {
    console.log ('asdf')
    this.fullItems.forEach (itB => {
      if (itB.name == item) {
        this.fire.itemNeeded (itB);
        this.populateItems ();
      }
    })

  }
  // onAdd () {
  //   this.router.navigate (["(home:add)"])
  //   // href="/tabs/(home:add)"
  // }
}
