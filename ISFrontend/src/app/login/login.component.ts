import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { Store } from '@ngrx/store';
import { login } from '../store/actions/user.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: any = {}
  user: any = {}
  error: boolean = false
  errorMsg : any = {}
  userInfo?: any

  constructor(private loginService: LoginService, private router: Router, private store: Store<{user: User}>) {

  }


  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  forma = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.pattern(this.passwordPattern)])

    }
  )
  get email() {
    return this.forma.get('username') 
  }
  get password() {
    return this.forma.get('password')
  }

  ngOnInit(): void {
  }
  isUserValid: boolean =false;
/*loginSubmited() {
  this.loginService.loginUser([this.forma.value.username, this.forma.value.password]).subscribe(res =>
    {
      if(res == "Failure") {
        this.isUserValid = false;
        alert('Prijava neuspesna.');
      }
      else{
        this.isUserValid = true;
        alert("Prijava uspesna.");
      }

    }
    );
}*/
  login() {
    console.log(this.forma.get('username')?.value)
    console.log(this.forma.get('password')?.value)
    let user =
    {
      username: this.forma.get('username')?.value,
      password: this.forma.get('password')?.value
    }
    this.loginService.getCredentials(user)
      .subscribe(res => {
        console.log(res);
        this.store.dispatch(login(res))
        this.credentials = res;
        // localStorage.setItem('token', this.credentials.token);
        localStorage.setItem('user', JSON.stringify(res));
       // console.log(res.role[0]);
        localStorage.setItem('role', res.role[0]);
        const token = this.credentials.token;
        if(res.role[0] == "Admin")
        {this.router.navigate(['./sviKorisnici']);}
        if(res.role[0] == "Stranka" || res.role[0] == "GrupaGradjana"){
        this.router.navigate(['izbornaL-pregledaj']);}
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
}


