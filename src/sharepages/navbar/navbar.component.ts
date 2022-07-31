import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  showForm: boolean = !this.auth.isAuthenticated();
  showProfile: boolean = this.auth.isAuthenticated();
  menuOpened: boolean = false;

  ngOnInit(): void {
    this.auth.mostrarForm.subscribe(
      value => {
        this.showForm = value;
      }
    )
    this.auth.mostrarProfile.subscribe(
      value => {
        this.showProfile = value;
      }
    )
  }

  showMenu() {
    this.menuOpened = !this.menuOpened;
  }

  

  logout() {
    this.showMenu();
    if (this.auth.logout()) {
      this.router.navigateByUrl('/home')
    }
  }
}
