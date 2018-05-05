import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { PeopleService } from './people.service';
import { RouterModule } from '@angular/router';
import { HeartsComponent } from './hearts/hearts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ProfileComponent,
    HeartsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'profile/:id', component: ProfileComponent }
    ])
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
