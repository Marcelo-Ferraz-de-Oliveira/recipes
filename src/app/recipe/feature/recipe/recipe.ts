import { Component, inject, input, OnInit } from '@angular/core';
import { RecipeService } from '../../data/recipe.service';
// import { ActivatedRoute } from '@angular/router';
// import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RecipeDetail } from '../../ui/recipe-detail/recipe-detail';
import { Recipe as RecipeModel } from '../../data/recipe.model';

@Component({
  selector: 'app-recipe',
  imports: [AsyncPipe, RecipeDetail],
  templateUrl: './recipe.html',
  styleUrl: './recipe.scss'
})
export class Recipe {
  recipeService = inject(RecipeService);

  id = input<string>();

  recipe$!: Observable<RecipeModel>;

  ngOnInit() {
    const id = this.id();
    if (id) this.recipe$ = this.recipeService.getById(id);
  }
  // Até o angular 15:
  // route = inject(ActivatedRoute);
  // recipe$ = this.route.params.pipe(
  //   map(params => params['id']),
  //   switchMap((id) => this.recipeService.getById(id)),
  // );

}
