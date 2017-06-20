import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { Recipeservice } from './recipeservice';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
selectedRecipe: Recipe;
  constructor(private recpeservce:Recipeservice) { }

  ngOnInit() {
    this.recpeservce.recipeSelected.subscribe(
      (recipe:Recipe) => { this.selectedRecipe = recipe}
    );
  
  }
  

}
