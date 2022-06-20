import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-desistiu',
  templateUrl: './pag-desistiu.component.html',
  styleUrls: ['./pag-desistiu.component.css']
})
export class PagDesistiuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list=[{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}];
}
