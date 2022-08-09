import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/Models/Jogo';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private api: ApiService) {
    // this.Jogo = new Jogo();
  }

  ngOnInit(): void {
    this.http.get<any>(`${this.api.getRoute()}/games/released`).subscribe(res => {
      this.list = res;
    })
  }

  // list=[{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}];

  list: any[] = []

}

