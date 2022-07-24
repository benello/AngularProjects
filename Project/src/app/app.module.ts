import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeInfoComponent } from './recipes/recipe-info/recipe-info.component';
import { RecipeComponent } from './recipes/recipe-list/recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditComponent } from './shopping-list/edit/edit.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeInfoComponent,
        RecipeComponent,
        ShoppingListComponent,
        EditComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        EditComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
