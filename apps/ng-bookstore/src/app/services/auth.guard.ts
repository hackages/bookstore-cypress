import { AuthService } from "./auth.service";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // navigate back to login page

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
