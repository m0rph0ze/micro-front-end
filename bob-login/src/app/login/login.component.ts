import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective, FormGroup } from '@angular/forms';
import { UserData } from './models/user-data';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userData: UserData = {id: null, password: null, login: null};

  public loginForm = this.formBuilder.group({
    login: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
  })
  

  constructor(
    private formBuilder: FormBuilder,
    private $loginService: LoginService
  ) { }

  ngOnInit() {
  }

  logIn(form: FormGroup, formDirective: FormGroupDirective, userData: UserData): void {
    if(formDirective.form.valid) {
      this.$loginService.logIn(form.controls['login'].value, form.controls['password'].value)
      .then((user: UserData) => {
        this.userData = user;
        if(user) window.location.replace('http://localhost:5000/');
      })
      .catch(error => {
        userData = null;
        console.error(error);
      })
    } else {
      form.markAllAsTouched();
      form.controls['login'].markAsDirty();
      form.controls['password'].markAsDirty();
    }
  }

}
