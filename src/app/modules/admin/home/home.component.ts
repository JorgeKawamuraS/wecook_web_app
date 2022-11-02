import { Component, OnInit } from '@angular/core';
import { Profile } from 'app/models/profile';
import { Recipe } from 'app/models/recipe';
import { ProfileService } from 'app/services/profile/profile.service';
import { RecipeService } from 'app/services/recipe/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private recipeService:RecipeService, private profileService:ProfileService) { }

  lastestRecipes: Recipe[];
  popularChefs: Profile[];
  ngOnInit(): void {
    this.recipeService.getLastestRecipes().subscribe(data => this.lastestRecipes = data);
    this.profileService.getLastestProfiles().subscribe(data => this.popularChefs= data);
  }

}
