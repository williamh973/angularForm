import { Component } from '@angular/core';
import { User } from '../models/order.model';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  submitted = false;

  model: User = new User("", "", "", "");


  constructor() {
    this.submitted = false
  }

  onSubmit() {
    this.submitted = true;
  }
}
