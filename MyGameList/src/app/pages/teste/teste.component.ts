import { Component, OnInit, Input } from '@angular/core';
// import { MatPaginatorModule } from '@angular/material/paginator';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

      // MatPaginator Inputs
      length = 100;
      pageSize = 10;
      pageSizeOptions: number[] = [5, 10, 25, 100];

      // MatPaginator Output
      pageEvent: PageEvent;

      setPageSizeOptions(setPageSizeOptionsInput: string) {
        if (setPageSizeOptionsInput) {
          this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
      }
}
