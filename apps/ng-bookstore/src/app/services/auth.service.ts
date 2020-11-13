import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private router: Router) {}
  login(email: string, password: string): void {
    localStorage.setItem("token", JSON.stringify({ password, email }));
  }

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }
}
