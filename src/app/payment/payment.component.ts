import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html'
})
export class PaymentComponent {

  cardNumber = '';
  expiry = '';
  cvv = '';

  constructor(private router: Router) {}

  payWithCard() {
    if (this.cardNumber.length < 12) {
      alert('Ingrese una tarjeta válida (simulación)');
      return;
    }
    this.router.navigate(['/confirm']);
  }

  payWithYape() {
    setTimeout(() => {
      this.router.navigate(['/confirm']);
    }, 1200);
  }
}
