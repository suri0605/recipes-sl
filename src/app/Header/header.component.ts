import {Component,EventEmitter,Output} from '@angular/core';


@Component({
selector: 'app-header',
templateUrl :'./header.component.html',


})



export class HeaderComponent{
@Output() selectedOption=new EventEmitter<string>()
onclick(feature:string){
    this.selectedOption.emit(feature);

}

}