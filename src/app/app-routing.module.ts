import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { CityComponent } from './components/city/city.component';
import { FlagComponent } from './components/flag/flag.component';

const routes: Routes = [
  { 
    path: ':kanton', 
    component: CountryComponent,
    children: [
      { 
        path: ':city', 
        component: CityComponent,
        children: [
          { path: ':flag', component: FlagComponent}
        ] 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
