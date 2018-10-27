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
  }

  save() {
    this.ingredientsService.saveIngredient(this.newIngredientForm.value);
    this.newIngredientForm.reset();
  }

  edit(ingredient: Ingredient) {
    this.newIngredientForm.reset();
    this.newIngredientForm.setValue(ingredient);
  }
}
