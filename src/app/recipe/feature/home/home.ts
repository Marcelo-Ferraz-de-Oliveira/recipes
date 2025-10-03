import { Component } from '@angular/core';
import { Recipe as RecipeComponent } from '../recipe/recipe';
import { Search } from '../search/search';

@Component({
  selector: 'app-home',
  imports: [Search],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
