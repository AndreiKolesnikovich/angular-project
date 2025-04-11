import { Routes } from '@angular/router';
import { BookshelfHomeComponent } from './shared/components/bookshelf-home/bookshelf-home.component';
import { AddBookComponent } from './shared/components/add-book/add-book.component';
import { AuthComponent } from './shared/components/auth/auth.component';

export const routes: Routes = [
    {path:'home', component: BookshelfHomeComponent},
    {path:'add-book', component: AddBookComponent},
    {path:'sign-in', component: AuthComponent, data : { isLoginMode:true }},
    {path:'sign-up', component: AuthComponent, data: { isLoginMode:false }},
];
