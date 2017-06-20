import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipe-edit/recipe-edit.component";
const approutes: Routes=[{path:"",redirectTo:"/recipes",pathMatch:"full"},{path:"recipes",component:RecipesComponent,
children:[{path:"",component:RecipeStartComponent},
{path:"new",component:RecipeEditComponent} ,
{path:":id",component:RecipeDetailComponent},{path:":id/edit",component:RecipeEditComponent}]     },
{path:"shoppinglist",component:ShoppingListComponent},];
@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(approutes)],
    exports: [ RouterModule ],
    providers: [],
    bootstrap: []
})

export class RootModule {}
