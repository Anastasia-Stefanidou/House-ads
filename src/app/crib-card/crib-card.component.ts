import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib!: Crib; 
  constructor() {
   }

  showDetails = false;

  ngOnInit() {
  }
}
