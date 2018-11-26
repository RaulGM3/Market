import { Injectable } from '@angular/core';
declare var firebase: any;
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  getHomeItems () {
    var plaRef = firebase.database ().ref ('items')
    return new Promise ((resolve, reject) => {
      plaRef.orderByChild ('needed').equalTo (0)
      .on ('value', function (snapshot) {
        var items = new Array ();
        snapshot.forEach (function (data) {
          var item = {
            key: data.key,
            name: data.val ().name,
            needed: data.val ().needed
          }
          console.log (item.name)
          items.push (item);
        });
        resolve (items);
      })
    })
  }

  getMarketItems () {
    var plaRef = firebase.database ().ref ('items')
    return new Promise ((resolve, reject) => {
      plaRef.orderByChild ('needed').equalTo (1)
      .on ('value', function (snapshot) {
        var items = new Array ();
        snapshot.forEach (function (data) {
          var item = {
            key: data.key,
            name: data.val ().name,
            description: data.val ().description,
            needed: data.val ().needed
          }
          items.push (item);
        });
        resolve (items);
      })
    })
  }

  pushItems (item) {
    let ref = firebase.database () .ref ()
      .child ('items')
      .push ({
        name: item.name,
        description: item.description,
        needed: 1
      });
      return ref.key;
  }

  itemNeeded (item) {
    firebase.database () .ref ().child ('items/' + item.key)
    .update ({
      needed: 1
    });
  }

  itemBought (item) {
    firebase.database () .ref ().child ('items/' + item.key)
    .update ({
      needed: 0
    });
  }
}
