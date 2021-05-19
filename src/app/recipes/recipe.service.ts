import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();
  constructor(private slService:ShoppingListService) { }

  // private recipes:Recipe[] =[
  //   new Recipe('Tasty Schnitzel','A super-tasty Schnitzel - Just Awesome ',
  //   'https://larahadi.com/wp-content/uploads/2021/01/Copy-of-Puzzle-Feed-2020-1-500x500.png'
  //   ,[
  //     new Ingredient('Meat',1),
  //     new Ingredient('French Fries',20)
  //   ]),
    
  //   new Recipe('Big Fat Burger','What else you need to say ?',
  //   'https://www.fatburgercanada.com/wp-content/uploads/2020/07/fatburger_0001_DoubleFatCheese-541x633.png'
  //   ,[ 
  //     new Ingredient('Buns',2),
  //     new Ingredient('Meat',1)
  //   ])
  // ];

  private recipes:Recipe[] = [];

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
