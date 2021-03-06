import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  @Input()
  set recipe(value: Recipe) {
    if (value && value.ingredients) {
      value.ingredients.forEach(i => this.addIngredient());
    }
    this.recipeForm.patchValue(value || {});
  }

  recipeForm: FormGroup;

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  constructor(public fb: FormBuilder, public recipeService: RecipesService) {
    this.recipeForm = fb.group({
      id: [],
      name: ['', [Validators.required]],
      ingredients: fb.array([])
    });
  }

  ngOnInit() {}

  addIngredient() {
    this.ingredients.push(this.fb.control({}, [Validators.required]));
  }

  async saveRecipe() {
    await this.recipeService.saveRecipe(this.recipeForm.value).toPromise();
    this.recipeService.reloadRecipes();
    this.recipeForm.reset();

    // NOTE: ugly! but recipeForm.reset() just resets values but doesnt remove controls
    while (this.ingredients.length) {
      this.ingredients.removeAt(0);
    }
  }
}
