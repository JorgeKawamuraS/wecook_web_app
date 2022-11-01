import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'app/models/recipe';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  baseURL = environment.apiUrl+'recipes/';

  constructor(private http:HttpClient) { }

  getRecipeById(recipeId: string): Observable<Recipe> {
    const url = this.baseURL + recipeId;
    return this.http.get<Recipe>(url);

  }

  getAllRecipes(): Observable<Recipe[]> {
    const url = this.baseURL;
    return this.http.get<Recipe[]>(url);
  }
}
