import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from '../shared/bottom-nav.component';
import { fadeSlide } from '../animations';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, BottomNavComponent],
  animations: [fadeSlide],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {}
