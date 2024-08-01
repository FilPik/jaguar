import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  players = Array.from({ length: 10 }, (_, i) => ({
    name: `Player ${i + 1}`,
    itemName: '',
    received: false,
  }));

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  addPlayer() {
    const newPlayer = {
      name: `Player ${this.players.length + 1}`,
      itemName: '',
      received: false,
    };
    this.players.push(newPlayer);
  }

  removePlayer(index: number) {
    this.players.splice(index, 1);
  }

  save() {
    console.log(this.players);
  }
}
