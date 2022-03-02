import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-styles></app-ng-styles>
    <app-css></app-css>
    <app-ng-class></app-ng-class>
    <p [appResalted]="'orange'">Hola mundo!</p>
    <app-ng-switch></app-ng-switch>
    <p>home works!</p>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
