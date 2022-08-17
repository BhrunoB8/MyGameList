import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/services/api/api.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  ngOnInit(): void {
  }

  selected: any = '';
  value = false;
  comment: string = '';

  grades = [
    { value: 1, desc: 'muito ruim' },
    { value: 2, desc: 'ruim' },
    { value: 3, desc: 'médio' },
    { value: 4, desc: 'bom' },
    { value: 5, desc: 'ótimo' },
  ]

  gameName: string = '';
  gameId: string = '';

  constructor(public dialog: MatDialogRef<PopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService, private http: HttpClient, private cookies: CookieService) {
    this.gameName = data.name;
    this.gameId = data.gameId;
  }


  close(): void {
    console.log(this.selected, this.comment)

    this.http.post(`${this.api.getRoute()}/games/comment/${this.gameId}`, {
      "rate": this.selected.value,
      "comment": this.comment
    },
    {
      headers: { Authorization: 'Bearer ' + this.cookies.get('token') }
    }).subscribe(res => {

      console.log(res)

    }, err => {
      console.log(err)
    })


    this.dialog.close()
  }

  getValue() {
    return this.value
  }

  stylez(item: any) {
    if (this.getValue() && item.value == this.selected.value) {
      return 'color: blue'
    }
    else {
      return 'color: black'
    }
  }

  change(item: any) {
    this.value = true;
    this.selected = item;
  }

}
