import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './validacija.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }
  today: Date = new Date();
  roles :any = {}
  id:number = 2;
  response : any = {}
  error : boolean = false;
  errorMsg : any = {}
  registered : boolean = false;
  
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  registerForm = new FormGroup(
    {
     naziv: new FormControl('',[Validators.required, Validators.minLength(3)]),
      userName : new FormControl('',[Validators.required, Validators.minLength(2)]),
      sediste : new FormControl('',[Validators.required, Validators.minLength(2)]),
      pib : new FormControl('',[Validators.required, Validators.pattern('^[0-9]{8}$')]),
      password : new FormControl('',[Validators.required,
        Validators.pattern(this.passwordPattern)]),
        datumOsnivanja: new FormControl(new Date().toISOString().split('T')[0]),

    }
  )
  get naziv(){
    return this.registerForm.get('naziv')
    }
    get userName(){
      return this.registerForm.get('userName')
    }
    get sediste(){
      return this.registerForm.get('sediste')
    }
    get email(){
      return this.registerForm.get('email')
    }
    get pib(){
      return this.registerForm.get('pib')
    }
    
    get password(){
      return this.registerForm.get('password')
    }
    get datumOsnivanja(){
      return this.registerForm.get('datumOsnivanja')
    }

  ngOnInit(): void {
    
  

    this.userService.getAllRoles()
    .subscribe((res:any) =>
      {
        this.roles = res;
        console.log(this.roles);


      },
      error=>
      {
        console.log(error)
      })
  }

  izaberi()
  {
    console.log("promenjeno")
    this.id =  +(document.getElementById('selectRole') as HTMLInputElement).value;
    console.log(this.id);
  }

  register()
  {
    if (this.registerForm.valid) {
    console.log(this.registerForm.get('sediste')?.value)
    console.log(this.registerForm.get('naziv')?.value)
    console.log(this.registerForm.get('pib')?.value)
    console.log(this.registerForm.get('password')?.value)

    let user =
    {
      
      sediste : this.registerForm.get('sediste')?.value,
      userName: this.registerForm.get('userName')?.value,
      naziv: this.registerForm.get('naziv')?.value,
      pib: this.registerForm.get('pib')?.value,
      password: this.registerForm.get('password')?.value,
      role : this.id,
      datumOsnivanja: this.id === 2 ? null : this.registerForm.get('datumOsnivanja')?.value

    }
    this.userService.createUser(user)
    .subscribe(res =>
      {
        console.log(res);
        this.response = res;
        alert("Uspesna registracija");
        this.router.navigate(['./login']);
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
