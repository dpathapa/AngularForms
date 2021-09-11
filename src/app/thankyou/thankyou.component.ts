import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  @Input() name;
  
  constructor() { }

  ngOnInit(): void {
  }

}
