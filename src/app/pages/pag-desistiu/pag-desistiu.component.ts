import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/Models/Jogo';

@Component({
  selector: 'app-pag-desistiu',
  templateUrl: './pag-desistiu.component.html',
  styleUrls: ['./pag-desistiu.component.css']
})
export class PagDesistiuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list = [
    new Jogo('Rainbow Six Siege', "\\assets\\rain6.jpg"),
    new Jogo('Bloons TD 6', "\\assets\\bloons.jpg"),
    new Jogo('Cs: Go', "\\assets\\csgo-capa.jpg"),
    new Jogo('God of War', "\\assets\\gow.jpg"),
  ]
}
