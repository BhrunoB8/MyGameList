import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list=[{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}];
}
