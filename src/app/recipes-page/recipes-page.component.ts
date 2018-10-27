import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit {

  recipes$ = this.recipesService.recipes$;

  constructor(public recipesService: RecipesService) { }

  ngOnInit() {
  }

}
