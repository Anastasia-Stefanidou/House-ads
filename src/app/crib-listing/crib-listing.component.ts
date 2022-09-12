import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CribListingComponent implements OnInit {

  cribs: any;
  error!: string;
  sortField: string = 'price';
  sortFields: Array<string> = [
    'price',
    'type'
  ];

  constructor(
    private http: HttpClient, 
    private cribsService: CribsService,
    public utilService: UtilService
    ) { }

  ngOnInit() {
    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );

    this.cribsService.newCribSubject.subscribe(
      data => this.cribs= [data, ...this.cribs]
    );
  }
}
