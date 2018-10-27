import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private _recipes = new BehaviorSubject<Recipe[]>([]);
  get recipes$() {
    return this._recipes.asObservable();
  }

  createRecipe(recipe: Recipe): void {
    const recipes = this._recipes.getValue();
    this._recipes.next([...recipes, recipe]);
  }

  remove(recipe: Recipe): void {
    const recipes = this._recipes.getValue();
    this._recipes.next([...recipes.filter(i => i !== recipe)]);
  }
}
