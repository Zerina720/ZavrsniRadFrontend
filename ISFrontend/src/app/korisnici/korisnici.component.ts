import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';
import { ActivatedRoute, Router } from '@angular/router';
import { BlokirajKorisnika } from '../interfaces/BlokirajKorisnika';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {
korisnici : any = []
id : any = 0
error : any = {}
errorMsg : any = {}
  constructor(private userService : UserService,private routerActive : ActivatedRoute,private router : Router) 
  {
   }
  getKorisnici()
  {
    this.userService.getAll()
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
  getNeblokirani()
  {
    this.userService.getNeblokirani()
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
  ngOnInit(): void {
  this.getNeblokirani();
   
  }
  blokirajUser(user:any)
    {
      let prijavaZaListu = new BlokirajKorisnika(user.user.id);
      console.log(user.id)
      var result = confirm('Da li želite da blokirate korisnika?')
      if(result){
      this.userService.deleteUser(user.id)
      .subscribe(res =>
        {
          alert("Blokirali ste korisnika!");
          this.router.navigate(['izbornaL-pregledaj'])
          console.log(this.error)
          window.location.reload();
        },
        error =>
        {
          alert("Greška!");
            console.log(error)
        })}
        else
        {
          alert('Odustali ste.')
        }
    }
    blokirajKorisnika(user:any)
    {
      let prijavaZaListu = new BlokirajKorisnika(user.id);
      this.userService.blokirajKorisnika(user.id)
      .subscribe( res =>
        {
          console.log(res)
          alert("Blokirali ste korisnika!")
          window.location.reload();
        },
        error=>
        {
          console.log(error)
        })
    }

}
