import { Routes } from '@angular/router';
import { Recipes } from './recipe/feature/recipes/recipes';
import { Recipe } from './recipe/feature/recipe/recipe';
import { Search } from './recipe/feature/search/search';
import { authGuard } from './auth/data/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Search },
  { path: 'receitas', component: Recipes },
  { path: 'receitas/:id',
    loadComponent: () =>
      import ('./recipe/feature/recipe/recipe').then(
        (c) => c.Recipe
      ),
  },
  { path: 'login',
    loadComponent: () =>
      import ('./auth/feature/login/login').then(
        (c) => c.Login
      ),
  },
  {
    path: 'minhas-receitas',
    loadComponent: () =>
      import ('./recipe/feature/my-recipes/my-recipes').then(
        (c) => c.MyRecipes
      ),
      canActivate: [authGuard],
  },
  {
    path: 'favoritos',
    loadComponent: () =>
      import ('./recipe/feature/favorites/favorites').then(
        (c) => c.Favorites
      ),
      canActivate: [authGuard],
  },
  {
    path: 'minha-conta',
    loadComponent: () =>
      import ('./auth/feature/user-account/user-account').then(
        (c) => c.UserAccount
      ),
      canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'home' },
];
