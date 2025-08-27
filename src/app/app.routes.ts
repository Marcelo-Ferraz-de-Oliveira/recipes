import { Routes } from '@angular/router';
import { Recipes } from './recipe/feature/recipes/recipes';
import { Recipe } from './recipe/feature/recipe/recipe';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Recipes },
  { path: 'receitas/:id',
    loadComponent: () =>
      import ('./recipe/feature/recipe/recipe').then(
        (c) => c.Recipe
      ),
  },
  { path: '**', redirectTo: 'home' },
];
