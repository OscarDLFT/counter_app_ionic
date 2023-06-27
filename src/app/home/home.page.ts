import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 private number: number = 0;
 public showNumber: string = '00';

  constructor() {}

  up(){}
  down(){}

}
