import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserListItemComponent } from './user/user-list/user-list-item/user-list-item.component';
import { DangerDirective } from './helper/directive/Danger.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserListItemComponent,
    DangerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
