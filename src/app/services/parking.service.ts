import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  estacionamientos = [
    { id: 1, nombre: 'Playa Umacollo', zona: 'Umacollo', disponibles: 5, tarifa: 3 },
    { id: 2, nombre: 'Centro Histórico', zona: 'Cercado', disponibles: 2, tarifa: 4 },
    { id: 3, nombre: 'Cayma Mall', zona: 'Cayma', disponibles: 1, tarifa: 5 }
  ];

  private historial: any[] = [];
  private ultimoCodigo: string | null = null;
  private ultimaReserva: any = null;

  getAll() {
    return this.estacionamientos;
  }

  getById(id: number) {
    return this.estacionamientos.find(e => e.id === id);
  }

  reservar(est: any) {
    if (!est || est.disponibles <= 0) return;

    est.disponibles--;

    this.ultimoCodigo = this.generarCodigo();

    this.ultimaReserva = {
      estacionamiento: est.nombre,
      zona: est.zona,
      fecha: new Date().toLocaleString(),
      estado: 'Pagado',
      codigo: this.ultimoCodigo
    };

    this.historial.unshift(this.ultimaReserva);
  }

  getHistorial() {
    return this.historial;
  }

  getUltimoCodigo() {
    return this.ultimoCodigo;
  }

  getUltimaReserva() {
    return this.ultimaReserva;
  }

  private generarCodigo(): string {
    const n = Math.floor(1000 + Math.random() * 9000);
    return `PARK-${n}`;
  }
}
