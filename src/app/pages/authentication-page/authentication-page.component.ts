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
  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit() {
    this.initializeForm();
    if (this.router.url == '/signin') {
      this.formHeading = 'SIGN IN';
      this.buttonHeading = 'Login';
      this.optionHeading = 'Signup';
    } else {
      this.formHeading = 'SIGN UP';
      this.buttonHeading = 'Register';
      this.optionHeading = 'Signin';
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
        console.log(e);
        if (e.status == 'success') {
          localStorage.setItem('token', e.data[0].userToken);
          console.log(e.data[0].userToken);
          console.log('success');
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
          console.log('success');
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
