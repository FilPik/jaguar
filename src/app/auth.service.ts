import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'jaga' && password === 'jaga') {
      this.isAuthenticated = true;
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
