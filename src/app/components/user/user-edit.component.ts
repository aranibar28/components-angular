import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  template: ` <p>user-edit works!</p> `,
  styles: [],
})
export class UserEditComponent implements OnInit {
  constructor(private router: ActivatedRoute) {
    this.router.parent?.params.subscribe((params) => {
      console.log('RUTA HIJA EDIT USER');
      console.log(params);
    });
  }

  ngOnInit(): void {}
}
