import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './components/property/property.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '',
    redirectTo:"home",
    pathMatch:"full"
  },
  { path: 'property',
    component: PropertyComponent
  },
  { path: 'home',
  component: HomeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
