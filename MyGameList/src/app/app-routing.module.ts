import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { TesteComponent } from './pages/teste/teste.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'teste',component:TesteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
