import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  currentPassword: string;
  currentUsername: string;

  login(){
    if(this.auth.login(this.currentUsername, this.currentPassword)){
      this.router.navigateByUrl('/profile')
    }
  }
}
