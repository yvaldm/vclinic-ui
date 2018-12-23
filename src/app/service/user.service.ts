import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
  private readonly confirmUrl: string;

  constructor(private http: HttpClient) {
    this.signupUrl = 'http://localhost:8080/user/signup';
    this.confirmUrl = 'http://localhost:8080/user/signup/confirm';
  }

  public signup(userRegistration: UserRegistration) {
    return this.http.post<UserRegistration>(this.signupUrl, userRegistration, httpOptions);
  }

  public confirm(email: string, code: string) {
    const params = new HttpParams().set('email', email).set('code', code);
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.confirmUrl, {headers: httpHeaders, params: params});
  }
}
