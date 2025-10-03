import { Routes } from '@angular/router';
import { Recipes } from './recipe/feature/recipes/recipes';
import { Recipe } from './recipe/feature/recipe/recipe';
import { Search } from './recipe/feature/search/search';

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
  { path: '**', redirectTo: 'home' },
];
