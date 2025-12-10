import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {

  codigo: string | null = null;
  reserva: any = null;

  constructor(private service: ParkingService) {
    this.codigo = this.service.getUltimoCodigo();
    this.reserva = this.service.getUltimaReserva();
  }
}
