import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { faUser, faSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faSign = faSign;
  loggedUser: string;
  isLoggedIn: boolean;
  isAdmin: boolean
  constructor(public authService: AuthService, private router: Router) {}  
  ngOnInit() {
    this.isAdmin = localStorage.getItem('isAdmin') == 'true';
    this.isLoggedIn = localStorage.getItem('isLoggedIn') == 'true';
    this.loggedUser = localStorage.getItem('loggedUser');
    if (!this.isLoggedIn) this.router.navigate(['/login']);
  }
}
