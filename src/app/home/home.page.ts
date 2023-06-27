import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 public number: number = 0;
 public showNumber: string = '00';

  constructor(
    private screenOrientation: ScreenOrientation
  ) {}

  /** Aumenta el número */
  up(): string {
    this.number++;
    if(this.number < 10){
      return this.showNumber = '0' + this.number;
    } else {
      return this.showNumber = '' + this.number;
    }
  }

  /** Resta un número */
  down(): string {
    this.number--;
    if(this.number < 10){
      return this.showNumber = '0' + this.number;
    } else {
      return this.showNumber = '' + this.number;
    }
  }

}
