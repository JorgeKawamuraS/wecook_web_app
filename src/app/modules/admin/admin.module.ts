import { ProfileComponent } from './profile/profile.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './../../shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FuseCardModule } from './../../../@fuse/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { adminRoutes } from './admin.routing';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
    declarations: [RecipesComponent, HomeComponent, ProfileComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes),
        FuseCardModule,
        MatAutocompleteModule,
        SharedModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        MatSliderModule,
        MatDividerModule,
        Ng5SliderModule,
    ],
})
export class AdminModule {}
