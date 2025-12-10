import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  estacionamientos: any[];
  ubicacion = { distrito: 'Cercado de Arequipa', referencia: 'Av. Ejército' };

  constructor(private service: ParkingService) {
    this.estacionamientos = this.service.getAll();
  }
}
