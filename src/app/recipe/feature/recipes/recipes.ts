import { Component, inject } from '@angular/core';
import { RecipeService } from '../../data/recipe.service';
import { Category as CategoryService } from '../../data/category.service';
import { AsyncPipe } from '@angular/common';
import { RecipeGrid } from '../../ui/recipe-grid/recipe-grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  imports: [AsyncPipe, RecipeGrid],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss'
})
export class Recipes {
  private recipeService = inject(RecipeService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);

  recipe$ = this.recipeService.get();
  categories$ = this.categoryService.get();

  goToRecipe(id: string) {
    this.router.navigate(['receitas', id]);
  }

}
