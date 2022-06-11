import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = [{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}, {nome:'Rainbow Six Siege'}, {nome:'Fifa 22'}, {nome:'Counter Stroke: Global Offensive'}, {nome: 'Bloons Td Battle'}];
}
