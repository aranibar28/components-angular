import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <hr />
    <p>Estilos CSS dessde el componente !!</p>
  `,
  styles: [
    `
      p {
        color: red;
        font-size: 20px;
      }
    `,
  ],
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
