import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-fav',
  templateUrl: './pag-fav.component.html',
  styleUrls: ['./pag-fav.component.css']
})
export class PagFavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list=[{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}];
}
