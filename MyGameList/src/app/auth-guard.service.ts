import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth-service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.authService.loggedIn) {
            return false;
        } else {
            return true;
        }

    }
}

@Injectable()
export class LoggedGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigateByUrl('/home')
            return false;
        }

    }
}