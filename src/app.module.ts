import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { PagFavComponent } from './pages/pag-fav/pag-fav.component';
import { PagPretendejogarComponent } from './pages/pag-pretendejogar/pag-pretendejogar.component';
import { PagDesistiuComponent } from './pages/pag-desistiu/pag-desistiu.component';
import { PagPlatinouComponent } from './pages/pag-platinou/pag-platinou.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CookieService } from 'ngx-cookie-service'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RankingComponent } from './pages/ranking/ranking.component';
import { EvaluateComponent } from './sharepages/Modals/evaluate/evaluate.component';
import { AuthGuardService, LoggedGuard } from './services/auth/auth-guard.service';
import { AuthService } from './services/auth/auth-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CatalogoComponent,
    CadastroComponent,
    LoginComponent,
    CatalogoComponent,
    PagFavComponent,
    PagPretendejogarComponent,
    PagDesistiuComponent,
    PagPlatinouComponent,
    ProfileComponent,
    RankingComponent,
    EvaluateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [CookieService, AuthGuardService, LoggedGuard, AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
