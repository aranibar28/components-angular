import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStylesComponent } from './components/ng-styles/ng-styles.component';
import { CssComponent } from './components/css/css.component';
import { ngClassComponent } from './components/ng-class/clases.component';
import { ResaltedDirective } from './directives/resalted.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { UserComponent } from './components/user/user.component';
import { UserNewComponent } from './components/user/user-new.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { UserDetailComponent } from './components/user/user-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStylesComponent,
    CssComponent,
    ngClassComponent,
    ResaltedDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    UserNewComponent,
    UserEditComponent,
    UserDetailComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
