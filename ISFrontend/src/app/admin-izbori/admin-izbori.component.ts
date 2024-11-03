import { Component, OnInit } from '@angular/core';
import { IzboriService } from '../izbori.service';
import { BlokirajKorisnika } from '../interfaces/BlokirajKorisnika';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-admin-izbori',
  templateUrl: './admin-izbori.component.html',
  styleUrls: ['./admin-izbori.component.css']
})
export class AdminIzboriComponent implements OnInit {

  constructor(private izboriService : IzboriService) { }
  izbori : any = [];
  error : any = {}
  id : any = 0
  getIzbori()
  {
    this.izboriService.getIzbori()
    .subscribe((res:any)=>
    {
      this.izbori = res;
      console.log(this.izbori);
      
    },
    error=>
    {
      console.log(error)
    })

  }
  izbrisiIzbore(user:any)
  {
    let prijavaZaListu = new BlokirajKorisnika(user.idIzbora);
    console.log(user.idIzbora)
    var result = confirm('Da li želite da izbrišete izbore?')
    if(result){
    this.izboriService.deleteIzbori(user.idIzbora)
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
  ngOnInit(): void {
    this.getIzbori()
  }

}
