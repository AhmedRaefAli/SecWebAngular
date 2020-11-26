import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presedent',
  templateUrl: './presedent.component.html',
  styleUrls: ['./presedent.component.css']
})
export class PresedentComponent implements OnInit {
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
