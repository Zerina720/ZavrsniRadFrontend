import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IzbornaLComponent } from '../izborna-l/izborna-l.component';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';
import { IzbornaLService } from '../izborna-l.service';
import { Router } from '@angular/router';
import { dodajListu, updateUser } from '../store/actions/user.actions';

@Component({
  selector: 'app-kreiraj-listu',
  templateUrl: './kreiraj-listu.component.html',
  styleUrls: ['./kreiraj-listu.component.css']
})
export class KreirajListuComponent implements OnInit {
  kreirajLForm = new FormGroup(
    {
     naziv: new FormControl('',[Validators.required, Validators.minLength(3)]),
      slogan : new FormControl('',[Validators.required, Validators.minLength(2)]),
    });
    user : User = {} as User
    errorMsg : any = {}
    error : boolean = false;
    response : any = {}
    added :boolean = false;
  constructor(private kreirajLService : IzbornaLService,private userStore: Store<{user : User}>,private router: Router)
   { this.userStore.select('user')
   .subscribe((res:any) =>
   {
     this.user = res
     console.log(this.user.user.id)
 })}
  get naziv(){
    return this.kreirajLForm.get('naziv')
    }
    get userName(){
      return this.kreirajLForm.get('slogan')
    }
  ngOnInit(): void {
  }
  kreirajListu()
  {
    
    if (this.kreirajLForm.valid) {
    console.log(this.kreirajLForm.get('slogan')?.value)
    console.log(this.kreirajLForm.get('naziv')?.value)
    console.log(this.user.user.id)
    let lista =
    {
      naziv: this.kreirajLForm.get('naziv')?.value,
      slogan : this.kreirajLForm.get('slogan')?.value,
      jmbg : this.user.user.id

    }
    
    this.kreirajLService.createLista(lista)
    .subscribe(res =>
      {
        //console.log(res);
        this.response = res;
        alert("Uspešno ste prijavili listu!");
        this.userStore.dispatch(dodajListu({liste:res}))
        localStorage.setItem('user', JSON.stringify(this.user))
        this.added = true;
       // this.user.user.izbornaListaId = this.user.liste.redniBrListe[0]; // Ažurira izbornaListaId
//this.userStore.dispatch(updateUser({ user: this.user.user })); // Šalje ažuriranog korisnika u store
console.log(this.user.liste,'ODGOVOR')
       // this.router.navigate(['nosilacL']);
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

      }
     
    )}
  }

  
}
