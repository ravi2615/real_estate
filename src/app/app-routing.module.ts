import { NotificationComponent } from './components/notification/notification.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
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
  { path: 'viewproperty/:id',
  component: ViewPropertyComponent
},{ path: 'notifications',
component: NotificationComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
