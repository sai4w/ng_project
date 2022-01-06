import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedUser: string;
  public isLoggedIn: Boolean = false;
  isAdmin: boolean;
  apiURL: string = 'http://localhost:3000/user';

  constructor(private router: Router, private http: HttpClient) {
    this.isAdmin = localStorage.getItem('isAdmin') == 'true';
    this.isLoggedIn = localStorage.getItem('isLoggedIn') == 'true';
    this.loggedUser = localStorage.getItem('loggedUser');
    if (!this.isLoggedIn) this.router.navigate(['/login']);
  }

  getUser(username: string): Observable<User[]> {
    const url = `${this.apiURL}?username=${username}`;
    return this.http.get<User[]>(url,httpOptions);
  }
  logout() {
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isAdmin');
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']).then();
    window.location.reload();
  }
  SignIn(user: User) {
    console.log(user)
    console.log(user.role);
    this.loggedUser = user.username;
    localStorage.setItem('isAdmin', String(true));
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isLoggedIn', String(true));
    this.router.navigate(['/dashboard']).then(() => {
      //window.location.reload();
    });
  }
}
