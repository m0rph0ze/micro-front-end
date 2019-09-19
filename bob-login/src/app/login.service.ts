import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './login/models/user-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  logIn(login: string, password: string): Promise<UserData> {
    return new Promise((resolve, reject) => {
      let url: string = `http://localhost:3000/users?login=${login}&&password=${password}`;
      console.log(`URL: ${url}`);
      this.http.get(url).subscribe(
        (user: UserData[]) => {
          resolve(user.length ? user[0] : null);
        },
        error => {
          reject(error);
        }
      )
    })
  }
}
