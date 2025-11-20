import { Component, inject } from '@angular/core';
import { LoginForm } from '../../ui/login-form/login-form';
import { AuthService } from '../../data/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { first, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const rotaAnterior = localStorage.getItem('rotaAnterior') || '/minha-conta';
    this.authService
        .login(this.form.value.email??'', this.form.value.password??'')
        .pipe(
          first(),
          tap(() => {
            this.router.navigate([rotaAnterior]);
          }),
        )
        .subscribe();
  }


}
