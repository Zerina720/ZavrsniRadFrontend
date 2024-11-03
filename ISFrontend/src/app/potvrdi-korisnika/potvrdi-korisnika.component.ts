import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BlokirajKorisnika } from '../interfaces/BlokirajKorisnika';
import { Router } from '@angular/router';

@Component({
  selector: 'app-potvrdi-korisnika',
  templateUrl: './potvrdi-korisnika.component.html',
  styleUrls: ['./potvrdi-korisnika.component.css']
})
export class PotvrdiKorisnikaComponent implements OnInit {
  korisnici : any = []
  id : any = 0
  error : any = {}
  errorMsg : any = {}
  constructor(private userService : UserService,private router : Router) { }
  getKorisnici()
  {
    this.userService.getNepotvrdjeni()
    .subscribe((res:any)=>
    {
      this.korisnici = res;
      console.log(this.korisnici);
    },
    error=>
    {
      console.log(error)
    })

  }
  prihvatiKorisnika(user:any)
  {
    let prijavaZaListu = new BlokirajKorisnika(user.id);
    this.userService.prihvatiKorisnika(user.id)
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
    this.getKorisnici()
  }

}
