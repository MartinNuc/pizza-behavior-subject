import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.scss']
})
export class IngredientsPageComponent implements OnInit {
  @ViewChild('firstName') firstNameElement: ElementRef;

  newIngredientForm: FormGroup;
  ingredients$ = this.ingredientsService.ingredients$;

  constructor(public ingredientsService: IngredientsService, fb: FormBuilder) {
    this.newIngredientForm = fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {}

  save() {
    this.ingredientsService.createIngredient(this.newIngredientForm.value);
    this.newIngredientForm.reset();
  }
}
