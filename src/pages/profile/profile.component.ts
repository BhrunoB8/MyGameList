import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProfileInfoService } from 'src/services/profile/profile-info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profile: ProfileInfoService) { }

  ngOnInit(): void {
    this.tprofile = this.profile.getUserInfo()
    console.log(this.tprofile)
  }
  tprofile: any
}


