import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html', // Pastikan path benar
  styleUrls: ['./login.component.css'], // Pastikan path benar
  imports: [FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.email === 'user@example.com' && this.password === 'password') {
      alert('Login successful!');
      this.router.navigate(['/crud']);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
