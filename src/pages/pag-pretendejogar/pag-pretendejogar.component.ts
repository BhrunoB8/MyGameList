import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/Models/Jogo';

@Component({
  selector: 'app-pag-pretendejogar',
  templateUrl: './pag-pretendejogar.component.html',
  styleUrls: ['./pag-pretendejogar.component.css']
})
export class PagPretendejogarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list = [
    new Jogo(`Elden Ring`, "\\assets\\Elden_Ring_capa.jpg"),
    new Jogo('Cuphead', "\\assets\\cuphead.png"),
    new Jogo('Borderlands 2', "\\assets\\Borderlands2.jpg"),
    new Jogo('Far Cry 3', "\\assets\\Far_cry_3.jpg"),
  ]
}
