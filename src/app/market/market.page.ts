import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
  items;

  constructor(private fire: FirebaseService) { }

  ngOnInit() {
    this.populateItems ();
  }

  populateItems () { //  PONER TODOS LOS QUE NO SEAN neededS
    this.fire.getMarketItems ().then (items => {
      this.items = items;
    })
  }

  selectItem (item) {
    this.fire.itemBought (item);
    this.populateItems ();
  }

}
