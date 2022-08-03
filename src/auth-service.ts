import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthService {
    readonly apiURL = 'http://10.2.170.39:3030';
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


    register(user: string, password: string, email: string) {

        if (
            this.http.post(`${this.apiURL}/user`, {

                "username": user,
                "email": email,
                "password": password

            }).subscribe(sent => {
                this.router.navigateByUrl('/login')
                return true
            }, erro => {
                alert('Email ou Usuário já cadastrados')
                return false
            })
        ) {
            return true
        } return false



    }


    login(user: string, password: string) {
        if (user !== '' && password !== '') {
            this.http.post(`${this.apiURL}/auth`, {
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