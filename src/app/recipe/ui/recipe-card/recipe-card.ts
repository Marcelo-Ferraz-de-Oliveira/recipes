import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CategoryNamePipe } from '../../util/category-name-pipe';
import { Category } from '../../data/category.model';
import { Recipe } from '../../data/recipe.model';
import { NewRecipeBadge } from '../../util/new-recipe-badge';

@Component({
  selector: 'app-recipe-card',
  imports: [CategoryNamePipe, NewRecipeBadge],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCard {
  recipe = input<Recipe>();
  categories = input<Category[]>();

}
