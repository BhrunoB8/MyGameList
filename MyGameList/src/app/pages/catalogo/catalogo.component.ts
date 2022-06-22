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

  list = [{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}, {nome:'Rainbow Six Siege'}, {nome:'Fifa 22'}, {nome:'Counter Stroke: Global Offensive'}, {nome: 'Bloons Td Battles'},{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome:'Counter Stroke: Global Offensive'}, {nome: 'Bloons Td Battles'},{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome: "Grand Theft Auto V"}];

  // export class PaginatorConfigurableExample {
  //   // MatPaginator Inputs
  //   length = 100;
  //   pageSize = 10;
  //   pageSizeOptions: number[] = [5, 10, 25, 100];

  //   // MatPaginator Output
  //   pageEvent: PageEvent;

  //   setPageSizeOptions(setPageSizeOptionsInput: string) {
  //     if (setPageSizeOptionsInput) {
  //       this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //     }
    // }


}
