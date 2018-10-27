import { Ingredient } from './ingredient';

export interface IngredientInRecipe {
  count: number;
  ingredient: Ingredient;
}

export interface Recipe {
  name: string;
  ingredients: IngredientInRecipe[];
}
