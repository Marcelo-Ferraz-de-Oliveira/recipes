import { Component, inject } from '@angular/core';
import { RecipeService } from '../../data/recipe.service';
import { Category as CategoryService } from '../../data/category';
import { AsyncPipe } from '@angular/common';
import { RecipeGrid } from '../../ui/recipe-grid/recipe-grid';

@Component({
  selector: 'app-recipes',
  imports: [AsyncPipe, RecipeGrid],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss'
})
export class Recipes {
  private recipeService = inject(RecipeService);
  private categoryService = inject(CategoryService);

  recipe$ = this.recipeService.get();
  categories$ = this.categoryService.get();

}
