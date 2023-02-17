import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArtformpageComponent } from './pages/artformpage/artformpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtformpageComponent,
    ContactpageComponent,
    SigninpageComponent,
    SignuppageComponent,
    SinglepageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
