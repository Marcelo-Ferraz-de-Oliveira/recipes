import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Banner } from '../../ui/banner/banner';
import { AsyncPipe } from '@angular/common';
import { RecipeService } from '../../data/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../data/recipe.model';
import { catchError, debounceTime, distinctUntilChanged, filter, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [Banner, AsyncPipe],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search implements OnInit{
  recipeService = inject(RecipeService);
  router = inject(Router);
  searchControl = new FormControl('', { nonNullable: true });
  filteredRecipes$!: Observable<Recipe[]>;

  ngOnInit(): void {
    this.filteredRecipes$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((searchTerm) => searchTerm.length > 2),
      switchMap((searchTerm) => 
        this.recipeService
          .search(searchTerm)
          .pipe(catchError(() => []))
      ),
    )
  }

  goToRecipe(id: string) {
    console.log('navegar para receita', id);
    this.router.navigate(['/receitas', id]);
  }

}
