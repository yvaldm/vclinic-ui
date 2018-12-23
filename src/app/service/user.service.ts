import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserRegistration} from '../entity/user-registration';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly signupUrl: string;

  constructor(private http: HttpClient) {
    this.signupUrl = 'https://localhost:8080/signup';
  }

  public signup(userRegistration: UserRegistration) {
    return this.http.post<UserRegistration>(this.signupUrl, userRegistration, httpOptions);
  }

}
