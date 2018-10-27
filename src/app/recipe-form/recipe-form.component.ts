import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup;

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  constructor(public fb: FormBuilder, public recipeService: RecipesService) {
    this.recipeForm = fb.group({
      name: ['', [Validators.required]],
      ingredients: fb.array([])
    });
  }

  ngOnInit() {}

  addIngredient() {
    this.ingredients.push(this.fb.control({}, [Validators.required]));
  }

  saveRecipe() {
    this.recipeService.createRecipe(this.recipeForm.value);
    this.recipeForm.reset();

    // NOTE: ugly! but recipeForm.reset() just resets values but doesnt remove controls
    while (this.ingredients.length) {
      this.ingredients.removeAt(0);
    }
  }
}
