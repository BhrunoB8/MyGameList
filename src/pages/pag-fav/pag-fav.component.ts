import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Jogo } from 'src/Models/Jogo';

@Component({
  selector: 'app-pag-fav',
  templateUrl: './pag-fav.component.html',
  styleUrls: ['./pag-fav.component.css']
})
export class PagFavComponent implements OnInit {

  constructor(private http: HttpClient, private cookie: CookieService) {

  }

  ngOnInit(): void {
    this.http.get("http://10.2.170.39:3030/games/fav-games", { headers: { authorization: `Bearer ${this.cookie.get('token')}` } }).subscribe(e => {
      this.jogos = e
    })
    console.log(this.jogos)
  }


  jogos: any
}
