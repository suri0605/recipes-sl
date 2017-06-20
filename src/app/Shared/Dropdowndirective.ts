import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appdropdown]'


})

export class Dropdowndirective{
    @HostBinding('class.open') isOpen= false;
@HostListener('click') toggleOpen(){
    this.isOpen=!this.isOpen;
    
}
};