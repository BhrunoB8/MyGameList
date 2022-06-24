import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EvaluateComponent>) { }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }



}
