import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './interfaces/User';
import { logout } from './store/actions/user.actions';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://localhost:7136/api/Stranka/login"
  constructor(private http : HttpClient, private store: Store<{user: User}>, private router: Router) { }

  getCredentials(user :any)
  {
    return this.http.post<any>(this.url, user);
  }
  isLoggedIn()
  {
    let token = localStorage.getItem('user');
    return token == null ? false : true;
  }
/*loginUser(loginInfo : Array<string>)
{
  return this.http.post(this.url, {
Username: loginInfo[0],
Password: loginInfo[1]
  },
  {
    responseType:'text'
  }
  );
}*/
  logout()
  {
    this.store.dispatch(logout())
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);    
  }
}