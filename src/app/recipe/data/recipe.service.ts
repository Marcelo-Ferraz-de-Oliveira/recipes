import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Recipe } from './recipe.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  httpClient = inject(HttpClient);
  apiBaseUrl = environment.apiBaseUrl;

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

  public search (search: string): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.apiBaseUrl}/api/v1/recipes`, {params: {search}})
      .pipe(
        tap(recipe => console.log('Recipe:', recipe))
      );
  }
}
