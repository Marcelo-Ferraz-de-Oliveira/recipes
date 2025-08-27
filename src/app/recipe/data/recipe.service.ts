import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Env } from '../../shared/util/env';
import { Observable, tap } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // environment = environment; // Use the environment directly if not using Env service
  environment = inject(Env);
  httpClient = inject(HttpClient);
  apiBaseUrl = this.environment.apiBaseUrl;

  public get(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.apiBaseUrl}/api/v1/recipes`)
      .pipe(
          tap(recipe => console.log('Recipe:', recipe))
        );
  }

  public getById(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${this.apiBaseUrl}/api/v1/recipes/${id}`)
      .pipe(
        tap(recipe => console.log('Recipe:', recipe))
      );
  }
}
