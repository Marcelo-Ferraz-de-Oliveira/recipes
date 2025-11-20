import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  const router = inject(Router);

  if(authService.isAuthenticated()) {
    localStorage.removeItem('rotaAnterior');
    return true;
  } else {
    localStorage.setItem('rotaAnterior', `/${route.url.toString()}`);
    router.navigate(['/login']);
    return false;
  }
};
