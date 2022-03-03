import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-styles></app-ng-styles>
    <p [appResalted]="'orange'">Directiva appResalted</p>
    <app-css></app-css>
    <app-ng-class></app-ng-class>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
