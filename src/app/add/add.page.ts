import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

// import { FireProvider } from '../../providers/fire/fire';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  myForm = {
    name: '',
    description: ''
  };

  constructor(
    private fire: FirebaseService
  ) {}

  ngOnInit() {
  }

  onSubmit () {
    this.fire.pushItems (this.myForm)
  }

}
