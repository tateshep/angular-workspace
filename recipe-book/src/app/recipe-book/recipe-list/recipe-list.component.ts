import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
/*     new Recipe('A Test Recipe', ' this is simply a test', '../../../assets/photoshopselfieelipse.png') */
      // tslint:disable-next-line:max-line-length
      new Recipe('A delicious dinner!', ' this is simply a test', 'https://www.maxpixel.net/static/photo/1x/Recipe-Dish-Home-Vegetarian-Food-Lunch-Nutrition-3889916.jpg'),
      // tslint:disable-next-line:max-line-length
      new Recipe('Yummy dessert!', ' this is simply a test', 'https://c1.staticflickr.com/5/4382/36493568241_42d9f7da40_b.jpg')

];
  constructor() { }

  ngOnInit() {
  }

}
