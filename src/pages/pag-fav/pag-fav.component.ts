import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Jogo } from 'src/Models/Jogo';
import { ApiService } from 'src/services/api/api.service';
import { ProfileInfoService } from 'src/services/profile/profile-info.service';

@Component({
  selector: 'app-pag-fav',
  templateUrl: './pag-fav.component.html',
  styleUrls: ['./pag-fav.component.css']
})
export class PagFavComponent implements OnInit {

  constructor(private http: HttpClient, private cookie: CookieService, private profileInfo: ProfileInfoService) {

  }

  jogos: any


  ngOnInit(): void {
    console.log(this.profileInfo.getFavoriteUserGames())
    this.jogos = this.profileInfo.getFavoriteUserGames()
  }



}
