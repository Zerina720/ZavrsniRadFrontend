import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../interfaces/User';
import { Store } from '@ngrx/store';
import { BlokirajKorisnika } from '../interfaces/BlokirajKorisnika';
import { IzborZaListu } from '../interfaces/IzborZaListu';

@Component({
  selector: 'app-zahtevi',
  templateUrl: './zahtevi.component.html',
  styleUrls: ['./zahtevi.component.css']
})
export class ZahteviComponent implements OnInit {
user : User = {} as User
zahtevi:any= []
  constructor(private userService:UserService,private userStore: Store<{user : User}>) 
  {
    this.userStore.select('user')
    .subscribe((res:any) =>
    {
      this.user = res
      console.log(this.user.user.izbornaListaId)
  })
   }
  getZahtevi(user:any)
  {
    if(this.user.user.izbornaListaId != null)
    {
    this.userService.getZahtevi(this.user.user.izbornaListaId)
    .subscribe((res:any)=>
    {
      this.zahtevi = res;
        console.log(this.zahtevi);
    },
    error=>
    {
      console.log(error)
    }) 
    }
  }

  prihvatiZahtev(user:any)
  {
    let prijavaZaListu = new BlokirajKorisnika(user.id);
    this.userService.prihvatiZahtev(user.id)
    .subscribe( res =>
      {
        console.log(res)
        alert("Uspešno!")
        window.location.reload();
      },
      error=>
      {
        console.log(error)
      })
  }
  odbijZahtev(user:any)
  {
    let prijavaZaListu = new BlokirajKorisnika(user.id);
    this.userService.odbijZahtev(user.id)
    .subscribe( res =>
      {
        console.log(res)
        alert("Uspešno!")
        window.location.reload();
      },
      error=>
      {
        console.log(error)
      })
  }

  ngOnInit(): void {
    this.getZahtevi(this.user.user.izbornaListaId);
  }

}
