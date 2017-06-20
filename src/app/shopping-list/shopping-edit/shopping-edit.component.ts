import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../../Shared/shared.model';
import { Shoppingservice } from '../shoppingservice';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef:ElementRef
@ViewChild('amountInput') amountInputRef:ElementRef
//@Output() onAddEmitter=new EventEmitter<Ingredient>();
  constructor(private slservice:Shoppingservice) { }

  ngOnInit() {
  }
onAdd(){
  const nameInp=this.nameInputRef.nativeElement.value;
  const amtInp=this.amountInputRef.nativeElement.value
  const newIngredient=new Ingredient (nameInp,amtInp);
  this.slservice.onIngAdded(newIngredient)
  //this.onAddEmitter.emit(newIngredient);

}
}
