import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from 'src/auth-service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(private cookie: CookieService, private auth: AuthService, private router: Router) { }

  currentUser: string;
  currentPassword: string;
  currentEmail: string;
  currentConfirmPassword: string;
  warningMessage: string = '';

  getAllValues() {
    if (this.verifyPasswords()) {
      this.auth.register(this.currentUser, this.currentPassword, this.currentEmail)

    }
  }

  verifyPasswords() {
    if (this.currentPassword !== this.currentConfirmPassword) {
      return false;
    }
    return true
  }





  styliz() {
    if (this.verifyPasswords()) {
      this.warningMessage = ''
      return ({ borderColor: 'green' });
    } else {
      this.warningMessage = 'Senhas não conferem';
      return ({ borderColor: 'red' })
    }
  }

  ngOnInit(): void {
  }


}
