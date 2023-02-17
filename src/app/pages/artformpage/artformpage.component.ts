import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-artforms',
  templateUrl: './artformpage.component.html',
  styleUrls: ['./artformpage.component.css']
})
export class ArtformpageComponent  {

  constructor(private router: Router) { }
  artforms=data
  goToNextPage(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage']);
  
  }
}