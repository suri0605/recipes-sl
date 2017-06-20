import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipeservice } from "app/recipes/recipeservice";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  
})
export class RecipeDetailComponent implements OnInit {
//@Input() 
somerandom:Recipe
id:number;
  constructor(private rcpeservce:Recipeservice,private route:ActivatedRoute) { }

  ngOnInit() {
this.route.params.subscribe(
  (params:Params) => {this.id= +params['id'];
  this.somerandom=this.rcpeservce.getRecipe(this.id)
    }
 
);
   
  }
Ingaddtoshlst(){
this.rcpeservce.Ingredaddtoshlst(this.somerandom.ingredients)
   }
}
