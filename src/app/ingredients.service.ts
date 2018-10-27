import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private _ingredients$ = new BehaviorSubject<Ingredient[]>([
    { name: 'Garlic', price: 5},
    { name: 'Salt', price: 3},
    { name: 'Tomato', price: 8},
    { name: 'Ham', price: 12}
  ]);
  get ingredients$() {
    return this._ingredients$.asObservable();
  }

  createIngredient(ingredient: Ingredient): void {
    const ingredients = this._ingredients$.getValue();
    this._ingredients$.next([...ingredients, ingredient]);
  }

  remove(ingredient: Ingredient) {
    const ingredients = this._ingredients$.getValue();
    this._ingredients$.next([...ingredients.filter(i => i !== ingredient)]);
  }
}
