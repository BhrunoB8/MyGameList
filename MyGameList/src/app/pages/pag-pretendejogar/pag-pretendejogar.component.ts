import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-pretendejogar',
  templateUrl: './pag-pretendejogar.component.html',
  styleUrls: ['./pag-pretendejogar.component.css']
})
export class PagPretendejogarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
list=[{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Free Fire"}];
}
