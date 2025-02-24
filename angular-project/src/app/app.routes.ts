import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/profile/user-profile/user-profile.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';

export const routes: Routes = [
    {path:'user-profile', component: UserProfileComponent},
    {path: 'calculator', component: CalculatorComponent}
];
