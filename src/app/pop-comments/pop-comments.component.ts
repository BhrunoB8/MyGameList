import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-pop-comments',
  templateUrl: './pop-comments.component.html',
  styleUrls: ['./pop-comments.component.css']
})
export class PopCommentsComponent implements OnInit {

  constructor(public dialog: MatDialogRef<PopCommentsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService, private http: HttpClient) {
    this.gameId = data.gameId;
    this.gameName = data.gameName;
  }
  comments: any[]
  gameId = ''
  gameName = '';
  ngOnInit(): void {
    this.http.get<any>(`${this.api.getRoute()}/games/comment/${this.gameId}`).subscribe(res => {
      this.comments = res
    })
  }

  close(): void {
    this.dialog.close()

  }

}
