import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
