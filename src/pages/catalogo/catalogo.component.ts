import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jogo } from 'src/Models/Jogo';
import { EvaluateComponent } from 'src/sharepages/Modals/evaluate/evaluate.component';
import { HttpClient } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  gameList: any;
  gameAdd: any[] = [];


  // addGameEvaluation(): void {
  //   const dialogRef = this.dialog.open(EvaluateComponent, {
  //     width: '250px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //   });
  // }


  ngOnInit(): void {
    this.http.get('http://10.2.170.39:3030/games/list').subscribe(result => {
      this.gameList = result

    })
  }

  button = false;


  favGame(id: string) {
    this.http.patch(`http://10.2.170.39:3030/games/fav-add/${id}`, {}, {
      headers: { Authorization: 'Bearer ' + this.cookie.get('token') }
    }).subscribe(res => {
      const teste: any = res;

      if (String(teste.message).includes(' vinculado')) {
        this.gameAdd.push(String(id))

      } else if (String(teste.message).includes('desvinculado')) {
        const newList = this.gameAdd.filter(e => e !== String(id))
        this.gameAdd = newList;
      }

      console.log(this.gameAdd)
      this.button = !this.button;
    })
  }

  verifyIcon(item: any) {


    if (this.gameAdd.find(e => { return e == item.id })) {
      return "color: red;"
    } else {
      return "color: black"
    }


  }


  // list = [
  //   new Jogo(`Dead by Daylight`, "\\assets\\Dead_By_Daylight.png"),
  //   new Jogo('Resident Evil 2', "\\assets\\re2rmk.png"),
  //   new Jogo('GTA V', "\\assets\\Grand_Theft_Auto_V_capa.png"),
  //   new Jogo('Fifa', "\\assets\\fifa.jpeg"),
  //   new Jogo('Rainbow Six Siege', "\\assets\\rain6.jpg"),
  //   new Jogo('Bloons TD 6', "\\assets\\bloons.jpg"),
  //   new Jogo('Cs: Go', "\\assets\\csgo-capa.jpg"),
  //   new Jogo('God of War', "\\assets\\gow.jpg"),
  //   new Jogo('Elden Ring', "\\assets\\Elden_Ring_capa.jpg"),
  //   new Jogo('Bit Dungeons 2', "\\assets\\bitdungeon.jpg"),
  //   new Jogo('Borderlands 2', "\\assets\\Borderlands2.jpg"),
  //   new Jogo('Farcry 3', "\\assets\\Far_cry_3.jpg"),
  //   new Jogo('Fall Guys', "\\assets\\FallGuys.jpg"),
  //   new Jogo('Cup Head', "\\assets\\cuphead.png"),
  //   new Jogo('Red Dead 2', "\\assets\\reddead.jpg"),
  //   new Jogo('Stardew Valley', "\\assets\\stardewValley.png")]

  // list = [{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}, {nome:'Rainbow Six Siege'}, {nome:'Fifa 22'}, {nome:'Counter Stroke: Global Offensive'}, {nome: 'Bloons Td Battles'},{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome:'Counter Stroke: Global Offensive'}, {nome: 'Bloons Td Battles'},{nome:'Don\'t Starve'},{nome:"Dead by Daylight"}, {nome: "Grand Theft Auto V"}];


}
