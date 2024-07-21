import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.css',
})
export class AuthenticationPageComponent implements OnInit {
  formHeading!: string;
  buttonHeading!: string;
  optionHeading!: string;
  authForm!: FormGroup;
  routeName!:string;
  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit() {
    this.initializeForm();
    if (this.router.url == '/signin') {
      this.formHeading = 'SIGN IN';
      this.buttonHeading = 'Login';
      this.optionHeading = 'Signup';
      this.routeName ="signin";
    } else {
      this.formHeading = 'SIGN UP';
      this.buttonHeading = 'Register';
      this.optionHeading = 'Signin';
      this.routeName ="signup";
    }
  }

  initializeForm() {
    this.authForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      createdAt: new FormControl(new Date().toISOString()),
    });
  }

  login() {
    if (this.authForm.valid) {
      this.accountService.signin(this.authForm.value).subscribe((e: any) => {
        if (e.status == 'success') {
          if (typeof window !== 'undefined') {
            localStorage.setItem('token', e.data[0].userToken);
          }
          this.router.navigate(['main/home']);
        } else {
          alert('failed to login');
        }
      });
    }
  }

  register() {
    if (this.authForm.valid) {
      this.accountService.signup(this.authForm.value).subscribe((e: any) => {
        if (e.status == 'success') {
          this.router.navigate(['signup']);
        } else {
          alert('failed to register');
        }
      });
    }
  }

  proceed() {
    if (this.router.url == '/signin') {
      this.login();
    } else {
      this.register();
    }
  }
}
