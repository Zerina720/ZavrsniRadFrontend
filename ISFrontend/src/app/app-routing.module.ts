import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RegistracijaComponent } from './registracija/registracija.component';
import { IzbornaLComponent } from './izborna-l/izborna-l.component';
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

const routes: Routes = [
  {
    path: '', component: LoginComponent},
    /*component: LoginComponent,
    canActivate : [AuthGuardService] 
  },*/
  {
    path:'registracija',
    component : RegistracijaComponent,
   /* canActivate : [AuthGuardService]*/
  },
  {
    path:'izbornaL-pregledaj',
    component:IzbornaLComponent
  },
  {
    path: 'kreirajListu',
    component:KreirajListuComponent
  },
  {
    path:'nosilacL',
    component:NosilacLComponent
  },
  {
    path:'izbori',
    component:IzboriComponent
  },
  {
    path:'korisnik-liste',
    component: KorisnikListaComponent
  },
  {
    path:'korisnici',
    component: KorisniciComponent
  },
  {
    path:'potvrdiKorisnika',
    component:PotvrdiKorisnikaComponent
  },
  {
    path:'kreirajIzbore',
    component:KreirajIzboreComponent
  },
  {
    path:'adminIzbori',
    component:AdminIzboriComponent
  },
  {
    path:'sviKorisnici',
    component:SviKorisniciComponent
  },
  {
    path:'zahtevi',
    component:ZahteviComponent
  },
  {
    path:'adminListe',
    component:AdminListeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
