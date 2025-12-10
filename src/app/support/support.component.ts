import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="support-modal">
    <h6 class="fw-bold">Soporte ParkApp</h6>
    <p class="small">Hola 👋 ¿En qué podemos ayudarte?</p>
    <input class="form-control mb-2" placeholder="Escribe tu mensaje...">
    <button class="btn btn-primary w-100 btn-sm">Enviar</button>
  </div>
  `
})
export class SupportComponent {}
