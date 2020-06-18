import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state/state.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'Home', component: HomeComponent},
 {path: 'State/:state', component: StateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
