import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { TesteComponent } from './pages/teste/teste.component';

import { LoginComponent } from './pages/login/login.component';
import { PagDesistiuComponent } from './pages/pag-desistiu/pag-desistiu.component';
import { PagFavComponent } from './pages/pag-fav/pag-fav.component';
import { PagPlatinouComponent } from './pages/pag-platinou/pag-platinou.component';
import { PagPretendejogarComponent } from './pages/pag-pretendejogar/pag-pretendejogar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'teste',component:TesteComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'pag-fav',component:PagFavComponent},
  {path:'pag-pretendejogar',component:PagPretendejogarComponent},
  {path:'pag-desistiu',component:PagDesistiuComponent},
  {path:'pag-platinou',component:PagPlatinouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
