import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeFormIngredientComponent } from './recipe-form-ingredient/recipe-form-ingredient.component';
import { PriceOfRecipePipe } from './price-of-recipe.pipe';
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientFormComponent,
    RecipeFormComponent,
    IngredientsPageComponent,
    RecipesPageComponent,
    RecipeFormIngredientComponent,
    PriceOfRecipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
