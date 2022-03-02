import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  template: `
    <button class="btn btn-primary m-2" (click)="size = size + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary m-2" (click)="size = size - 5">
      <i class="fa fa-minus"></i>
    </button>
    <p [style.fontSize.px]="size">Hola mundo... esta es una etiqueta</p>
  `,
  styles: [],
})
export class NgStylesComponent implements OnInit {
  size: number = 50;
  constructor() {}

  ngOnInit(): void {}
}
