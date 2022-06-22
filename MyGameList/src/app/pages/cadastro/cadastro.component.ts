import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor() { }

  currentUser: string;
  currentPassword: string;
  currentEmail: string;
  currentConfirmPassword: string;
  warningMessage: string = '';

  getAllValues() {
    if (this.verifyPasswords()) {
      console.log(this.currentUser, this.currentEmail, this.currentPassword, this.currentConfirmPassword);
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
