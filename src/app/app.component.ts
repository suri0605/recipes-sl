import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  loadedItem="recipe";
  onNav(Navigation:string){
    this.loadedItem=Navigation;

  }
}
