import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './Header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { Shoppingservice } from "app/shopping-list/shoppingservice";
import { Recipeservice } from "app/recipes/recipeservice";
import { Dropdowndirective } from "./Shared/Dropdowndirective";
import { RootModule } from "app/Approutingmodule";
import { RouterModule } from "@angular/router";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,ShoppingListComponent,ShoppingEditComponent,HeaderComponent,
    RecipesComponent,RecipeDetailComponent,RecipeListComponent,RecipeItemComponent,Dropdowndirective, RecipeStartComponent, RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,RootModule,
    HttpModule,RootModule,RouterModule
  ],
  providers: [Shoppingservice,Recipeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
