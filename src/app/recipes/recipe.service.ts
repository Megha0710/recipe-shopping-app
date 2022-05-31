import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: "root"
})
export class RecipeService{

    private recipes:Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This a test recipe',
            'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg',
            [
                new Ingredient('onion',1),
                new Ingredient('lemon',1),
            ]),
        new Recipe('Second Test Recipe',
        'This a test recipe',
        'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg',
        [
            new Ingredient('pepper',1),
            new Ingredient('salt',1),
        ]
        )
      ];
      constructor(private shoppingListService:ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }
      addToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.ingredients.push(...ingredients);
        this.shoppingListService.ingredientsChanged.next(ingredients.slice());
      }

      getRecipe(index:number){
          return this.recipes[index];
      }
}