import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  backgroundColor: string = 'rgb(107, 141, 228)';
  loginError: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  buttonStyle() {
    this.backgroundColor = this.backgroundColor === 'rgb(107, 141, 228)' ? 'rgb(89, 119, 196)' : 'rgb(107, 141, 228)';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.loginService.login(username, password).subscribe(
        (response) => {
          console.log('Login successful:', response);
          this.loginError = '';
        },
        (error) => {
          console.error('Login failed:', error);
          this.loginError = error.message;
        }
      );
    }
  }

  onCreateUser(): void {
  }
}