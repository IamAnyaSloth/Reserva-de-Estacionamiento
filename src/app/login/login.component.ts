import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { fadeSlide } from '../animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeSlide],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router) {}

  ingresar() {
    this.router.navigate(['/home']);
  }
}
