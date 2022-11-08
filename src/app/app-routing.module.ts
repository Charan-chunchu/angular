import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PipeComponent } from './pipe/pipe.component';
import { TranslateComponent } from './translate/translate.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'home', component:HomeComponent},
  { path: 'api', component:ApiComponent},
  { path: 'databinding', component:DatabindingComponent},
  { path: 'pipe', component:PipeComponent},
  { path: 'translate', component:TranslateComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
