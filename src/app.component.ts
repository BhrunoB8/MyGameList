import { HttpClient } from '@angular/common/http';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './services/api/api.service';
import { ProfileInfoService } from './services/profile/profile-info.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyGameList';

  constructor(private http: HttpClient, private api: ApiService, private profileInfo: ProfileInfoService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.http.get<any>(`${this.api.getRoute()}/user`,{ headers: { Authorization: 'Bearer ' + this.cookie.get('token') }}).subscribe(resultado => {

      this.profileInfo.setFavoriteUserGames(resultado.games)
      this.profileInfo.setUserInfo(resultado.user)
      console.log(this.profileInfo.getFavoriteUserGames())

    }, erro => { })
  }

}
