import { AuthService } from './../../services/auth.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  @ViewChild('login')
  loginInput: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }

  ngAfterViewInit() {
    this.loginInput.nativeElement.focus();
  }

  ngOnInit() {}

  login() {
    const login = this.loginForm.controls.login.value;
    const password = this.loginForm.controls.password.value;
    this.authService.login(login, password);
    this.router.navigate(['dashboard']);
  }
}
