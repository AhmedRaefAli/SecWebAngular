import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css']
})
export class SecComponent implements OnInit {

  appointment : any;  
  ClickedRow:any;
  HighlightRow : Number;
  constructor() {
    this.HighlightRow = 0;
    this.ClickedRow = function(index:Number){  
      this.HighlightRow = index;  
    }
   }

  ngOnInit(): void {
    this.appointment = []
  }

}
