import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Jogo } from 'src/Models/Jogo';
import { EvaluateComponent } from 'src/sharepages/Modals/evaluate/evaluate.component';
import { HttpClient } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/services/api/api.service';
import { ProfileInfoService } from 'src/services/profile/profile-info.service';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { PopCommentsComponent } from 'src/app/pop-comments/pop-comments.component';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(private dialog: MatDialog, private http: HttpClient, private cookie: CookieService, private api: ApiService, private profileInfo: ProfileInfoService) { }
  gameList: any;
  userGames: any[] = []
  gameAdd: any[] = [];


  // addGameEvaluation(): void {
  //   const dialogRef = this.dialog.open(EvaluateComponent, {
  //     width: '250px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //   });
  // }

  openComments(item: any) {

    console.log(item)
    this.dialog.open(PopCommentsComponent, {
      data: {
        gameId: item.id,
        gameName: item.name
      }
    })
  }

  openModal(item: any) {
    this.dialog.open(PopUpComponent, {
      data: {
        name: item.name,
        gameId: item.id
      }
    })
  }




  ngOnInit(): void {
    this.http.get(`${this.api.getRoute()}/games/list`).subscribe(result => {
      this.gameList = result
    })
    this.userGames = this.profileInfo.getFavoriteUserGames()
  }

  button = false;


  favGame(item: any) {
    console.log(item)


    this.http.patch(`${this.api.getRoute()}/games/fav-add/${item.id}`, {}, {
      headers: { Authorization: 'Bearer ' + this.cookie.get('token') }
    }).subscribe(res => {
      const teste: any = res;


      if (String(teste.message).includes(' vinculado')) {
        this.userGames.push(item)
        this.profileInfo.setFavoriteUserGames(this.userGames)
      } else if (String(teste.message).includes('desvinculado')) {

        this.profileInfo.setFavoriteUserGames(this.profileInfo.getFavoriteUserGames().filter(e => e.id !== item.id))

        const newList = this.userGames.filter(e => e.id !== item.id)
        this.userGames = newList;
      }

      this.button = !this.button;
    }, erro => {
      console.log(erro)
    })
  }

  verifyIcon(item: any) {
    // console.log(item)


    if (this.userGames.find(e => e.id == item.id)) {
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
