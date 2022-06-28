import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthService {
    constructor(private cookie: CookieService, private router: Router) {
    }

    loggedIn: boolean = this.verify();
    mostrarForm = new EventEmitter<boolean>();
    mostrarProfile = new EventEmitter<boolean>();

    verify() {
        if (!this.cookie.get('token')) {
            return false;
        } else {
            return true;
        }
    }

    login(user: string, password: string) {
        if (user == 'admin' && password == 'admin') {
            this.cookie.set('token', user);
            this.loggedIn = true;
            this.mostrarForm.emit(false);
            this.mostrarProfile.emit(true)
            return true;
        } else {
            return false;
        }
    }

    logout() {
        this.cookie.delete('token');
        this.loggedIn = false;
        this.mostrarProfile.emit(false)
        this.mostrarForm.emit(true);
        return true
    }

    isAuthenticated() {
        return this.loggedIn
    }

}