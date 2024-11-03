import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IzbornaLService } from '../izborna-l.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-nosilac-l',
  templateUrl: './nosilac-l.component.html',
  styleUrls: ['./nosilac-l.component.css']
})
export class NosilacLComponent implements OnInit {

  nosilacLForm = new FormGroup(
    {
      jmbg : new FormControl('',[Validators.required, Validators.pattern('^[0-9]{13}$')]),
      ime: new FormControl('',[Validators.required, Validators.minLength(3)]),
      prezime : new FormControl('',[Validators.required, Validators.minLength(2)]),
      titula : new FormControl('',[Validators.required, Validators.minLength(2)])      
    });
    user : User = {} as User
    idListe : any = 0;
    lista :any = []
    errorMsg : any = {}
    error : boolean = false;
    response : any = {}
  constructor(private nosilacLService : IzbornaLService,private userStore: Store<{user : User}>)
   { this.userStore.select('user')
   .subscribe((res:any) =>
   {
     this.user = res
     console.log(res)
     console.log(this.user.user.id)
 })}
  
  get jmbg(){
    return this.nosilacLForm.get('jmbg')
    }
    get ime(){
      return this.nosilacLForm.get('ime')
    }
    get prezime(){
      return this.nosilacLForm.get('prezime')
    }
  ngOnInit(): void {
    this.nosilacLService.getListeById(this.user.user.id)
    .subscribe((res:any) =>
      {
        this.lista = res;
        console.log(this.lista);
        this.idListe = this.lista[0]._id;
        console.log(this.idListe);

      },
      error=>
      {
        console.log(error)
      })
      
  }
  kreirajNosioca()
  {
    console.log(this.idListe)
    if(this.idListe != null)
    {
    if (this.nosilacLForm.valid) {
    let nosilac =
    {
      jmbg: this.nosilacLForm.get('jmbg')?.value,
      ime : this.nosilacLForm.get('ime')?.value,
      prezime : this.nosilacLForm.get('prezime')?.value,
      titula : this.nosilacLForm.get('titula')?.value,
      izbornaListaId: this.idListe
    }
    this.nosilacLService.createNosilacL(nosilac)
    .subscribe(res =>
      {
        console.log(res);
        this.response = res;
        alert("Uspešno ste dodali nosioca za Vasu listu!");
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
    )}}
    else{alert("Morate imati izbornu listu!")}
    
  }

}
