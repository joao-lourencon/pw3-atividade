import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

export const routes: Routes = [
    {path: '', redirectTo: "login", pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'duvidas', component: FaqPageComponent},
    {path: 'sobre', component: AboutPageComponent},

    {path: '**', component: NotfoundPageComponent}
];
