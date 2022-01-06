import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  
  canActivate(): boolean {
    if (this.authService.isLoggedIn) return true;
    else {
      this.router.navigate(['forbidden']);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      return false;
    }
  }
}
