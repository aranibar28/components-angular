import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';
import { UserNewComponent } from './user-new.component';

export const USERS_ROUTES: Routes = [
  { path: 'nuevo', component: UserNewComponent },
  { path: 'editar', component: UserEditComponent },
  { path: 'detalles', component: UserDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },
];
