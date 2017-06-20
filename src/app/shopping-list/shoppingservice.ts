import { Ingredient } from '../Shared/shared.model'
import { EventEmitter } from '@angular/core'
export class Shoppingservice{
ingChanged=new EventEmitter<Ingredient[]>() 
    ingredients : Ingredient[] =[new Ingredient('Shopping item1',400),new Ingredient('Shopping item2',500)];

getIngredients(){
    return this.ingredients.slice();
}
 onIngAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingChanged.emit(this.ingredients.slice());

  }
  Oningaddshpinlist(ingredients:Ingredient[])
{
    this.ingredients.push(...ingredients);
    this.ingChanged.emit(this.ingredients.slice());
}
}
