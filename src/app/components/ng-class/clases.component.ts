import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './clases.component.html',
})
export class ngClassComponent {
  alert: string = 'alert-danger';
  loading: boolean = false;

  propiedades: any = {
    danger: true,
  };

  constructor() {}

  Execute() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }
}
