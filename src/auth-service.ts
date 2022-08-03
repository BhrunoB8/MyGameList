import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthService {
    constructor(private cookie: CookieService, private router: Router, private http: HttpClient) {
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
        if (user !== '' && password !== '') {
            this.http.post('http://10.2.170.39:3030/auth', {
                "email": String(user),
                "password": String(password)
            }).subscribe(resultado => {
                this.cookie.set('token', user);
                this.loggedIn = true;
                this.mostrarForm.emit(false);
                this.mostrarProfile.emit(true)
                this.router.navigateByUrl('/home')

                return true;

            }, erro => {
                console.log(erro.status)
                return false;

            });
            return false;

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