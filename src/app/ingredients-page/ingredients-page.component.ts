import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.scss']
})
export class IngredientsPageComponent implements OnInit {
  @ViewChild('firstName') firstNameElement: ElementRef;

  newIngredientForm: FormGroup;
  ingredients$ = this.ingredientsService.ingredients$;
  edittedIngredient: Ingredient;

  constructor(public ingredientsService: IngredientsService, public fb: FormBuilder) {}

  buildForm() {
    this.newIngredientForm = this.fb.group({
      id: [],
      name: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.buildForm();
    this.ingredientsService.reloadIngredients();
  }

  async save() {
    await this.ingredientsService.saveIngredient(this.newIngredientForm.value).toPromise();
    this.ingredientsService.reloadIngredients();
    this.newIngredientForm.reset();
  }

  edit(ingredient: Ingredient) {
    this.newIngredientForm.reset();
    this.newIngredientForm.setValue(ingredient);
  }

  async remove(ingredient: Ingredient) {
    await this.ingredientsService.remove(ingredient).toPromise();
    this.ingredientsService.reloadIngredients();
  }
}
