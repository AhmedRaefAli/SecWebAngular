import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresedentComponent } from './presedent/presedent.component';
import { HomeComponent } from './home/home.component';
import { SecComponent } from './sec/sec.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presedent', component: PresedentComponent },
  {path: 'sec', component: SecComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
