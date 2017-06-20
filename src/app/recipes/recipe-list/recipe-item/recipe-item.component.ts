import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { Recipeservice } from '../../recipeservice';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

@Input() recipe:Recipe;
@Input() index:number;
 
  constructor() { }
// onclick(){
//   this.rcpeservce.recipeSelected.emit(this.recipe);
// }
  ngOnInit() {

  }
  
}
