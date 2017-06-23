import {Recipe} from './recipe.model';
import {Shoppingservice} from '../shopping-list/shoppingservice';
import {Ingredient} from '../Shared/shared.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export  class Recipeservice {
recipeSelected= new Subject<Recipe>()
//subject instead of event emitter


recipes: Recipe[]=[
  new Recipe('Test Recipe',
  'Testing',
  'http://media3.sailusfood.com/wp-content/uploads/2013/12/parotta-recipe.jpg',
  [new Ingredient('meat',1),new Ingredient('pulihara',32)]),
   new Recipe('second recipe',
   'Maggie description',
   'http://picturetherecipe.com/wp-content/uploads/2016/04/Featured-Image-300x300.jpg',
    [new Ingredient('komernu',45),new Ingredient('royyalu',3)])

];
constructor(private shpingsrv:Shoppingservice){
    
}
getRecipes(){
    return this.recipes.slice();
}

getRecipe(index:number){
return this.recipes[index];
}

Ingredaddtoshlst(ingredients:Ingredient[]){
this.shpingsrv.Oningaddshpinlist(ingredients);
}

};