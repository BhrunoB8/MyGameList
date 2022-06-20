import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EvaluateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }



}
