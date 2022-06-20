import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EvaluateComponent } from 'src/app/sharepages/Modals/evaluate/evaluate.component';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  name: String;

  constructor(public dialog: MatDialog) { }

  addGameEvaluation(): void {
    const dialogRef = this.dialog.open(EvaluateComponent, {
      width: '250px',
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

  list = [{ nome: 'Don\'t Starve' }, { nome: "Dead by Daylight" }, { nome: "Resident Evil" }, { nome: "Grand Theft Auto V" }, { nome: 'Rainbow Six Siege' }, { nome: 'Fifa 22' }, { nome: 'Counter Stroke: Global Offensive' }, { nome: 'Bloons Td Battles' }, { nome: 'Don\'t Starve' }, { nome: "Dead by Daylight" }, { nome: 'Counter Stroke: Global Offensive' }, { nome: 'Bloons Td Battles' }, { nome: 'Don\'t Starve' }, { nome: "Dead by Daylight" }, { nome: "Grand Theft Auto V" }];

}
