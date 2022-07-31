import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/Models/Jogo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
// this.Jogo = new Jogo();
  }

  ngOnInit(): void {
  }

  // list=[{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}];

  list = [
    new Jogo(`Dead by Daylight`, "\\assets\\Dead_By_Daylight.png"),
    new Jogo('Resident Evil 2', "\\assets\\re2rmk.png"),
    new Jogo('GTA V', "\\assets\\Grand_Theft_Auto_V_capa.png"),
  ]

}

