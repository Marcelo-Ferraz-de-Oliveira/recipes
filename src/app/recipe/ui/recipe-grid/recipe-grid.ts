import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Category } from '../../data/category.model';
import { Recipe } from '../../data/recipe.model';
import { RecipeCard } from '../recipe-card/recipe-card';

@Component({
  selector: 'app-recipe-grid',
  imports: [RecipeCard],
  templateUrl: './recipe-grid.html',
  styleUrl: './recipe-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeGrid {
  recipes = input<Recipe[]>();
  categories = input<Category[]>();
  clickEvent = output<string>();

}
