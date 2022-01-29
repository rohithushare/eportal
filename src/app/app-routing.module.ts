import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";
import { WesternWearComponent } from "./components/western-wear/western-wear.component";


const routes : Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'westernWear',
        component : WesternWearComponent
    },
    {
        path : '',
        redirectTo : 'home',
        pathMatch  : 'full'
    },
     {
        path : '**',
        component : PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}