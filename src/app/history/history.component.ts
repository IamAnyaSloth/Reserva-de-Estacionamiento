import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingService } from '../services/parking.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  historial: any[];

  constructor(private service: ParkingService) {
    this.historial = this.service.getHistorial();
  }
}
