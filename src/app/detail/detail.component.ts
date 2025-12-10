import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  est: any;

  constructor(route: ActivatedRoute, private service: ParkingService, private router: Router) {
    const id = Number(route.snapshot.paramMap.get('id'));
    this.est = this.service.getById(id);
  }

  reservarYirAPago() {
    // generar y guardar reserva (simulada)
    const code = this.service.reservar(this.est);
    // navegar al pago para completar (simulado)
    this.router.navigate(['/payment']);
  }
}
