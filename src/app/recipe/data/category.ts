import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../shared/util/env';
import { Category as CategoryModel } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class Category {
  httpClient = inject(HttpClient);
  environment = inject(Env);

  apiUrl = this.environment.apiBaseUrl;
  public get(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(`${this.apiUrl}/api/v1/categories`);
  }


}
