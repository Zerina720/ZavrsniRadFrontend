import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { userReducer } from './store/reducers/user.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegistracijaComponent } from './registracija/registracija.component';
import { IzbornaLComponent } from './izborna-l/izborna-l.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { KreirajListuComponent } from './kreiraj-listu/kreiraj-listu.component';
import { NosilacLComponent } from './nosilac-l/nosilac-l.component';
import { IzboriComponent } from './izbori/izbori.component';
import { KorisnikListaComponent } from './korisnik-lista/korisnik-lista.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { PotvrdiKorisnikaComponent } from './potvrdi-korisnika/potvrdi-korisnika.component';
import { KreirajIzboreComponent } from './kreiraj-izbore/kreiraj-izbore.component';
import { AdminIzboriComponent } from './admin-izbori/admin-izbori.component';
import { SviKorisniciComponent } from './svi-korisnici/svi-korisnici.component';
import { ZahteviComponent } from './zahtevi/zahtevi.component';
import { AdminListeComponent } from './admin-liste/admin-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracijaComponent,
    IzbornaLComponent,
    NavBarComponent,
    KreirajListuComponent,
    NosilacLComponent,
    IzboriComponent,
    KorisnikListaComponent,
    KorisniciComponent,
    PotvrdiKorisnikaComponent,
    KreirajIzboreComponent,
    AdminIzboriComponent,
    SviKorisniciComponent,
    ZahteviComponent,
    AdminListeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({user : userReducer}),
    OAuthModule.forRoot(),
    RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'register',component:RegistracijaComponent},
      {path:'izbornaL-pregledaj',component:IzbornaLComponent},
      {path:'kreirajListu', component:KreirajListuComponent},
      {path:'nosilacL',component:NosilacLComponent},
      {path:'izbori',component:IzboriComponent},
      {path:'korisnik-liste',component:KorisnikListaComponent},
      {path:'korisnici', component:KorisniciComponent},
      {path:'potvrdiKorisnika',component:PotvrdiKorisnikaComponent},
      {path:'kreirajIzbore',component:KreirajIzboreComponent},
      {path:'adminIzbori',component:AdminIzboriComponent},
      {path:'sviKorisnici',component:SviKorisniciComponent},
      {path:'zahtevi',component:ZahteviComponent},
      {path:'adminListe',component:AdminListeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
