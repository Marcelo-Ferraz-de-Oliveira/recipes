import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Recipe } from '../../data/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetail {
  recipe = input<Recipe>();

}
