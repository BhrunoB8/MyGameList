import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthService {
    constructor(private cookie: CookieService, private router: Router) {
    }

    loggedIn: boolean = this.verify();

    verify(){
        if(!this.cookie.get('token')){
            return false;
        }else{
            return true;
        }
    }

    login(user: string, password: string) {
        if (user == 'admin' && password == 'admin') {
            this.cookie.set('token', user);
            this.loggedIn = true;
            console.log(this.loggedIn)
            return true;
        } else {
            return false;
        }
    }

    logout() {
        this.cookie.delete('token');
        this.loggedIn = false;
        this.router.navigateByUrl('/home')
    }

    isAuthenticated(){
        return this.loggedIn
    }

}