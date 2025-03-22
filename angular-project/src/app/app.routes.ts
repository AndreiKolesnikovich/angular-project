import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/profile/user-profile/user-profile.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
    {path:'user-profile', component: UserProfileComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'tests', component: TestComponent}
];
