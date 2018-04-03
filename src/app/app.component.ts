import { Component } from '@angular/core';
import { Nanny } from './nanny'
import * as $ from "jquery"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nannies = [
    new Nanny(1, "Jane", "Doe", "01/01/1990", "+254-712-345-678", "Somewhere far", "Baby Sitting"),
    new Nanny(2, "Janet", "Dough", "02/02/1991", "+254-723-456-789", "Somewhere near", "Commercial Cleaning"),
  ]
}
