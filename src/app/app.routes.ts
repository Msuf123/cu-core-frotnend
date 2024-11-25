import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { OatuhCallbackComponent } from './oatuh-callback/oatuh-callback.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginPageComponent},
    {path:"info",component:InfoPageComponent},
    {path:"oauth",component:OatuhCallbackComponent}
];
