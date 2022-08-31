import { Component, OnInit } from '@angular/core';
import { cribs } from '../data/cribs';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CribListingComponent implements OnInit {

  cribs: Array<any> = cribs;
  constructor() { }

  ngOnInit() {
  }

}
