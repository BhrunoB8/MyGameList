import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/Models/Jogo';

@Component({
  selector: 'app-pag-fav',
  templateUrl: './pag-fav.component.html',
  styleUrls: ['./pag-fav.component.css']
})
export class PagFavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list = [
    new Jogo(`Dead by Daylight`, "\\assets\\Dead_By_Daylight.png"),
    new Jogo('Resident Evil 2', "\\assets\\re2rmk.png"),
    new Jogo('GTA V', "\\assets\\Grand_Theft_Auto_V_capa.png"),
    new Jogo('Red Dead 2', "\\assets\\reddead.jpg"),
  ]
}
