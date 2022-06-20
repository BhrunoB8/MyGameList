import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EvaluateComponent } from 'src/app/sharepages/Modals/evaluate/evaluate.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  addGameEvaluation(): void {
    const dialogRef = this.dialog.open(EvaluateComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

list=[{nome:"Dead by Daylight"}, {nome:"Resident Evil"}, {nome: "Grand Theft Auto V"}];

}

