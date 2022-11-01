/* eslint-disable arrow-parens */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { LabelType, Options } from 'ng5-slider';
import { PostServiceService } from 'app/services/post-service.service';
import { Post } from 'app/models/post';
import { Recipe } from 'app/models/recipe';
import { RecipeService } from 'app/services/recipe/recipe.service';
@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    fruitCtrl = new FormControl('');
    filteredFruits: Observable<string[]>;
    fruits: string[] = ['Lemon'];
    allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
    minValue: number = 0;
    maxValue: number = 500;
    minTime: number = 0;
    maxTime: number = 12;
    options: Options = {
        floor: 0,
        ceil: 500,
        translate: (value: number, label: LabelType): string => 'S/ ' + value,
        // translate: (value: number, label: LabelType): string => {
        //     switch (label) {
        //         case LabelType.Low:
        //             return '<b>Min price:</b> Rs. ' + value;
        //         case LabelType.High:
        //             return '<b>Max price:</b> Rs. ' + value;
        //         default:
        //             return 'Rs. ' + value;
        //     }
        // },
    };

    timeOptions: Options = {
        floor: 0,
        ceil: 12,
        translate: (value: number, label: LabelType): string => value + ' hrs',
    };

    constructor(private postService: PostServiceService, private recipeService: RecipeService) {
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) =>
                fruit ? this._filter(fruit) : this.allFruits.slice()
            )
        );
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our fruit
        if (value) {
            this.fruits.push(value);
        }

        // Clear the input value
        event.chipInput?.clear();

        this.fruitCtrl.setValue(null);
    }

    remove(fruit: string): void {
        const index = this.fruits.indexOf(fruit);

        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.allFruits.filter((fruit) =>
            fruit.toLowerCase().includes(filterValue)
        );
    }

    users: Post[];
    recipes: Recipe[];
    notFound: true;
    ngOnInit() {
        this.postService.getAllUsers().subscribe(data => this.users = data);
        this.recipeService.getAllRecipes().subscribe(data => {this.recipes = data},
            (err: any) => {
                console.error(err);
                this.notFound = true;
            });
    }
}
