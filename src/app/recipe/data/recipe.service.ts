import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Env } from '../../shared/util/env';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';
// import { environment } from '../../../environments/environment.development'; // or environment.ts

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // environment = environment; // Use the environment directly if not using Env service
  environment = inject(Env);
  httpClient = inject(HttpClient);
  apiBaseUrl = this.environment.apiBaseUrl;

  public get(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.apiBaseUrl}/api/v1/recipes`);
  }
}
