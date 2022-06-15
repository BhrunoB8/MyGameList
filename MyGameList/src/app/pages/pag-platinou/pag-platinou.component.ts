import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-platinou',
  templateUrl: './pag-platinou.component.html',
  styleUrls: ['./pag-platinou.component.css']
})
export class PagPlatinouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list=[{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Free Fire"}];
}
