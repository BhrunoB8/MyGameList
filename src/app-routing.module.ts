import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, LoggedGuard } from './services/auth/auth-guard.service';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';
import { PagDesistiuComponent } from './pages/pag-desistiu/pag-desistiu.component';
import { PagFavComponent } from './pages/pag-fav/pag-fav.component';
import { PagPlatinouComponent } from './pages/pag-platinou/pag-platinou.component';
import { PagPretendejogarComponent } from './pages/pag-pretendejogar/pag-pretendejogar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'catalogo', component: CatalogoComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'pag-fav', component: PagFavComponent, canActivate: [LoggedGuard] },
  { path: 'pag-pretendejogar', component: PagPretendejogarComponent, canActivate: [LoggedGuard] },
  { path: 'pag-desistiu', component: PagDesistiuComponent, canActivate: [LoggedGuard] },
  { path: 'pag-platinou', component: PagPlatinouComponent, canActivate: [LoggedGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedGuard] },


  { path: 'ranking', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
