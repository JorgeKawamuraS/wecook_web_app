import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'app/models/recipe';
import { environment } from 'environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  baseURL = environment.apiUrl+'recipes/';
  baseUrlJsonServe = environment.apiUrlJsonServe+'recipes'
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }
  constructor(private http:HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  getRecipeById(recipeId: string): Observable<Recipe> {
    const url = this.baseUrlJsonServe + recipeId;
    return this.http.get<Recipe>(url);

  }

  getRecipesByIngredients(ingredientName: string): Observable<Recipe[]> {
    const url = this.baseUrlJsonServe + '?q='+ingredientName;
    return this.http.get<Recipe[]>(url);
  }

  getLastestRecipes():Observable<Recipe[]> {
    const url = this.baseUrlJsonServe+'?_start=1&_end=4';
    return this.http.get<Recipe[]>(url);
  }

  getAllRecipes(): Observable<Recipe[]> {
    const url = this.baseUrlJsonServe;
    return this.http.get<Recipe[]>(url)/*.pipe(retry(2), catchError(this.handleError))*/;
  }
}
