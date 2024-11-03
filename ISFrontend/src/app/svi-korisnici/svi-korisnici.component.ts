import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BlokirajKorisnika } from '../interfaces/BlokirajKorisnika';

@Component({
  selector: 'app-svi-korisnici',
  templateUrl: './svi-korisnici.component.html',
  styleUrls: ['./svi-korisnici.component.css']
})
export class SviKorisniciComponent implements OnInit {
  korisnici : any = []
  id : any = 0
  error : any = {}
  errorMsg : any = {}
  constructor(private userService : UserService) { }
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
  ngOnInit(): void {
    this.getKorisnici()
  }
  izbrisiUsera(user:any)
  {
    let prijavaZaListu = new BlokirajKorisnika(user.id);
    console.log(user.id,'ID')

    var result = confirm('Da li želite da izbrišete korisnika?')
    if(result){
    this.userService.deleteUser(user.id)
    .subscribe(res =>
      {
        alert("Izbrisali ste korisnika!");
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
}
