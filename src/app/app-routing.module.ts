import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepairComponent } from './repair/repair.component';
import { DesigningsComponent } from './designings/designings.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{path:"navbar",component:NavbarComponent},
{path:"home",component:HomeComponent},
{path:"repair",component:RepairComponent},
{path:"designings",component:DesigningsComponent},
{path:"signin",component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
