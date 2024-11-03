import { Component, OnInit } from '@angular/core';
import { IzbornaLService } from '../izborna-l.service';
import { User } from '../interfaces/User';
import { Store } from '@ngrx/store';
import { IzborZaListu } from '../interfaces/IzborZaListu';
import { BlokirajKorisnika } from '../interfaces/BlokirajKorisnika';
import { dodajListu } from '../store/actions/user.actions';

@Component({
  selector: 'app-izborna-l',
  templateUrl: './izborna-l.component.html',
  styleUrls: ['./izborna-l.component.css']
})
export class IzbornaLComponent implements OnInit {
  user : User = {} as User;

  error: boolean = false
  errorMsg : any = {}
  constructor(private izbornaLService : IzbornaLService,private userStore: Store<{user : User}>) 
  {
    this.userStore.select('user')
    .subscribe((res:any) =>
    {
      this.user = res
      console.log(this.user.user.id)
      
  })
   }
   
  liste : any = [];
 cekanje : any = [];
 added :boolean = false;
 getUserNaCekanju(user:any)
 {
   this.izbornaLService.getUserCekanje(this.user.user.id)
   .subscribe((res:any)=>
   {
     this.cekanje = res;
       console.log(this.cekanje);
   },
   error=>
   {
     console.log(error)
   })

 }
 povuciKandidaturu(user:User)
 {console.log(user.user.id)
  
   this.izbornaLService.povuciKandidaturu(user.user.id)
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
  prijaviIzbListu(lista:any){
    let prijavaZaListu = new IzborZaListu(lista._id, this.user.user.id);
    this.izbornaLService.prijaviListu(prijavaZaListu).subscribe(res => {
      console.log(res);
      alert("Uspešno ste prijavili izbornu listu!");
      this.userStore.dispatch(dodajListu({liste:res}))
      localStorage.setItem('user', JSON.stringify(this.user))
      this.added = true;
      window.location.reload();
    },
      (error:any) => {
        if(error.status == 400)
        {
          console.log(error)
           this.error = true;
            this.errorMsg = error?.error?.msg;
            alert(this.errorMsg);

        }
        else
        {
          this.error= true;
          console.log(error.error.msg)
          this.errorMsg = error?.error?.error
          
        }

      })
  }

 /* prijaviIzbListu(lista: any) {
   console.log(this.user.id);
   console.log(lista.redniBrListe);
   let prijavaZaListu = new IzborZaListu(lista.redniBrListe, this.user.id);
   this.izbornaLService.prijaviListu(prijavaZaListu).subscribe(respone =>{alert(JSON.stringify('prijava za listu je poslata'))});
  }*/
  getListe()
  {
    this.izbornaLService.getListe()
    .subscribe((res:any)=>
    {
      this.liste = res;
      console.log(this.liste);
    },
    error=>
    {
      console.log(error)
    })

  }

  ngOnInit(): void {
    this.getListe();
    this.getUserNaCekanju(this.user.user.id);
  }
  

}

