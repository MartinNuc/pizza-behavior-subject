import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  recipes$ = this.recipesService.recipes$;

  edittedRecipe: Recipe;

  constructor(public recipesService: RecipesService) { }

  ngOnInit() {
  }

  edit(recipe: Recipe) {
    this.edittedRecipe = recipe;
  }


}
