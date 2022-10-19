import { ProfileComponent } from './profile/profile.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const adminRoutes: Route[] = [
    {
        path: 'recipes',
        component: RecipesComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent,
    },
];
