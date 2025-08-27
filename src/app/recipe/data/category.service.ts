import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category as CategoryModel } from './category.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Category {
  httpClient = inject(HttpClient);
  apiUrl = environment.apiBaseUrl;
  public get(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(`${this.apiUrl}/api/v1/categories`);
  }


}
