import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UserRegistration} from '../entity/user-registration';
import {UserLogin} from '../entity/user-login';

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
  private readonly confirmUrl: string;
  private readonly loginUrl: string;

  constructor(private http: HttpClient) {
    this.signupUrl = 'http://localhost:8080/user/signup';
    this.confirmUrl = 'http://localhost:8080/user/signup/confirm';
    this.loginUrl = 'http://localhost:8080/login_process';
  }

  public signup(userRegistration: UserRegistration) {
    return this.http.post<UserRegistration>(this.signupUrl, userRegistration, httpOptions);
  }

  public confirm(email: string, code: string) {
    const params = new HttpParams().set('email', email).set('code', code);
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.confirmUrl, {headers: httpHeaders, params: params});
  }

  public login(userLogin: UserLogin) {

    const body = new URLSearchParams();
    body.set('username', userLogin.username);
    body.set('password', userLogin.password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(this.loginUrl, body.toString(), options);
  }
}
