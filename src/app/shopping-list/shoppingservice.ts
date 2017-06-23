import { Ingredient } from '../Shared/shared.model'
import { EventEmitter } from '@angular/core'
import { Subject } from "rxjs/Subject";
export class Shoppingservice{
ingChanged=new Subject<Ingredient[]>() 
    ingredients : Ingredient[] =[new Ingredient('Shopping item1',400),new Ingredient('Shopping item2',500)];

getIngredients(){
    return this.ingredients.slice();
}
 onIngAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingChanged.next(this.ingredients.slice());

  }
  Oningaddshpinlist(ingredients:Ingredient[])
{
    this.ingredients.push(...ingredients);
    this.ingChanged.next(this.ingredients.slice());
}
}
