import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Recipeservice} from '../recipeservice';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit  {
  
  recipes:Recipe[];

  constructor(private rcpeserv:Recipeservice) { }



   ngOnInit() {
     this.recipes= this.rcpeserv.getRecipes();
     
   }
  
 

}
