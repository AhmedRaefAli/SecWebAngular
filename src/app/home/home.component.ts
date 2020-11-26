import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }


  presClicked(): void{
    this.router.navigate(['/presedent']);
  }


  secClicked(): void{
    this.router.navigate(['/sec']);
  }
}
