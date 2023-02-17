import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformpageComponent} from './pages/artformpage/artformpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component: HomepageComponent
  },
  {
    path:'artformpage',component: ArtformpageComponent
  },
  {
    path:'contactpage',component: ContactpageComponent
  },
  {
    path:'signinpage',component: SigninpageComponent
  },
  {
    path:'signuppage',component: SignuppageComponent
  },
  {
    path:'singlepage',component: SinglepageComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
