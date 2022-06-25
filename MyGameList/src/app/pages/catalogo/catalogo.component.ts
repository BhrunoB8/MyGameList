import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jogo } from 'src/app/Models/Jogo';
import { EvaluateComponent } from 'src/app/sharepages/Modals/evaluate/evaluate.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }
  // constructor(public dialog: MatDialog) { }

  // addGameEvaluation(): void {
  //   const dialogRef = this.dialog.open(EvaluateComponent, {
  //     width: '250px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //   });
  // }

  ngOnInit(): void {
  }

  list = [
    new Jogo(`Dead by Daylight`, "\\assets\\Dead_By_Daylight.png"),
    new Jogo('Resident Evil 2', "\\assets\\re2rmk.png"),
    new Jogo('Grand Theft Auto V', "\\assets\\Grand_Theft_Auto_V_capa.png"),
    new Jogo('Fifa', "\\assets\\fifa.jpeg"),
    new Jogo('Rainbow Six Siege', "\\assets\\r6.jpg"),
    new Jogo('Bloons TD 6', "\\assets\\bloonsTD.jpg"),
    new Jogo('Cs: Go', "\\assets\\csgo-capa.jpg"),
    new Jogo('God of War', "\\assets\\gow.jpg"),
    new Jogo('Elden Ring', "\\assets\\Elden_Ring_capa.jpg"),
    new Jogo('Bit Dungeons 2', "\\assets\\bitdungeon.jpg"),
    new Jogo('Borderlands 2', "\\assets\\Borderlands2.jpg"),
    new Jogo('Farcry 3', "\\assets\\Far_cry_3.jpg"),
    new Jogo('Fall Guys', "\\assets\\FallGuys.jpg"),
    new Jogo('Cup Head', "\\assets\\cuphead.png"),
    new Jogo('Red Dead Redemption 2', "\\assets\\reddead.jpg"),
  ]

  // list = [{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}, {nome:'Rainbow Six Siege'}, {nome:'Fifa 22'}, {nome:'Counter Stroke: Global Offensive'}, {nome: 'Bloons Td Battles'},{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome:'Counter Stroke: Global Offensive'}, {nome: 'Bloons Td Battles'},{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome: "Grand Theft Auto V"}];


}
