import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <nav class="bottom-nav">
    <a routerLink="/home" routerLinkActive="active">
      <i class="bi bi-house"></i>
      <span>Inicio</span>
    </a>
    <a routerLink="/history" routerLinkActive="active">
      <i class="bi bi-clock-history"></i>
      <span>Historial</span>
    </a>
    <a routerLink="/profile" routerLinkActive="active">
      <i class="bi bi-person"></i>
      <span>Perfil</span>
    </a>
  </nav>
  `
})
export class BottomNavComponent {}
