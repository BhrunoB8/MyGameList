import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/Models/Jogo';

@Component({
  selector: 'app-pag-platinou',
  templateUrl: './pag-platinou.component.html',
  styleUrls: ['./pag-platinou.component.css']
})
export class PagPlatinouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list = [
    new Jogo(`Dead by Daylight`, "\\assets\\Dead_By_Daylight.png"),
    new Jogo('Resident Evil 2', "\\assets\\re2rmk.png"),
    new Jogo('GTA V', "\\assets\\Grand_Theft_Auto_V_capa.png"),
    new Jogo('Red Dead 2', "\\assets\\reddead.jpg"),
    new Jogo('Stardew Valley', "\\assets\\stardewValley.png")]
}
