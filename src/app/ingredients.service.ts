import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private _ingredients$ = new BehaviorSubject<Ingredient[]>([
    { id: 1, name: 'Garlic', price: 5},
    { id: 2, name: 'Salt', price: 3},
    { id: 3, name: 'Tomato', price: 8},
    { id: 4, name: 'Ham', price: 12}
  ]);
  get ingredients$() {
    return this._ingredients$.asObservable();
  }

  saveIngredient(ingredient: Ingredient): void {
    ingredient.id ? this.edit(ingredient) : this.create(ingredient);
  }

  create(ingredient: Ingredient) {
    ingredient.id = Math.round(Math.random() * 10000 + 1);
    const ingredients = this._ingredients$.getValue();
    this._ingredients$.next([...ingredients, ingredient]);
  }

  edit(ingredient: Ingredient) {
    const ingredients = this._ingredients$.getValue();
    const index = ingredients.findIndex(i => i.id === ingredient.id);
    ingredients[index] = ingredient;
    this._ingredients$.next([...ingredients]);
  }

  remove(ingredient: Ingredient) {
    const ingredients = this._ingredients$.getValue();
    this._ingredients$.next([...ingredients.filter(i => i !== ingredient)]);
  }
}
