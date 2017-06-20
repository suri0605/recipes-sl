import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/shared.model';
import {Shoppingservice} from './shoppingservice';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient[];

  constructor(private shpngserv:Shoppingservice) { }

  ngOnInit() {
this.ingredients=this.shpngserv.getIngredients();
 this.shpngserv.ingChanged.subscribe(
      (ingredients:Ingredient[]) => { this.ingredients = ingredients}
    );
  
  }


 
}
