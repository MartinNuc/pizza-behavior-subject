import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private _recipes$ = new BehaviorSubject<Recipe[]>([]);
  get recipes$() {
    return this._recipes$.asObservable();
  }

  saveRecipe(recipe: Recipe) {
    recipe.id ? this.edit(recipe) : this.create(recipe);
  }

  create(recipe: Recipe): void {
    const id = Math.round(Math.random() * 10000 + 1);
    const recipes = this._recipes$.getValue();
    this._recipes$.next([...recipes, {...recipe, id} ]);
  }

  edit(recipe: Recipe) {
    const recipes = this._recipes$.getValue();
    const index = recipes.findIndex(i => i.id === recipe.id);
    recipes[index] = recipe;
    this._recipes$.next([...recipes]);
  }

  remove(recipe: Recipe): void {
    const recipes = this._recipes$.getValue();
    this._recipes$.next([...recipes.filter(i => i !== recipe)]);
  }
}
