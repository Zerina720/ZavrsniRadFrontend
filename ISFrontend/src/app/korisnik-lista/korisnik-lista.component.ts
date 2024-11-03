import { Component, OnInit } from '@angular/core';
import { IzbornaLService } from '../izborna-l.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-korisnik-lista',
  templateUrl: './korisnik-lista.component.html',
  styleUrls: ['./korisnik-lista.component.css']
})
export class KorisnikListaComponent implements OnInit {

  constructor(private listaService: IzbornaLService,private userStore: Store<{user : User}>)
   { this.userStore.select('user')
   .subscribe((res:any) =>
   {
     this.user = res
     console.log(this.user.user.id)
 })}
 user : User = {} as User
  liste : any = []
  korisnici:any= []
  nosioci: any = []
  idListe : any = 0;
  izbornaLid= 0;
  lista :any = []
  
  
  
  
  ngOnInit(): void {
   
    this.listaService.getListeById(this.user.user.id)
    .subscribe((res:any)=>
    {
      this.liste = res;
        console.log(this.liste);
        this.idListe = this.liste[0]._id;
        console.log(this.idListe,'IDLISTE')
          if(this.listaService.getNosilacById(this.idListe) != null)
          {
          this.listaService.getNosilacById(this.idListe)
          .subscribe((res:any)=>
          {
            this.nosioci = res;
            console.log(this.nosioci);
           
          },
          error=>
          {
            console.log(error)
          })
       }
 
   if(this.listaService.getKorisniciNaIstojL(this.user.user.id) != null)
    {
    this.listaService.getKorisniciNaIstojL(this.user.user.id)
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
  

       
    },
    error=>
    {
      console.log(error)
    })

   
}
}