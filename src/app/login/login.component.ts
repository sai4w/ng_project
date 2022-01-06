import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  public logedUser: string;
  public isLogedIn: Boolean = false;
  public role: string;
  user1 = new  User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}
  
  
  onLogedin() {
    this.authService.getUser(this.user.username).subscribe((client) => { 
      this.user1 = client[0]
    if (this.user1.password == this.user.password){
      this.authService.SignIn(this.user);
      this.router.navigate(['/dashboard']);
    }else
    Swal.fire({ icon: 'error', title: 'Oops...', text: 'Invalid Username or Password!' })
    });
  }
}
