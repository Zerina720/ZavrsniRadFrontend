import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../interfaces/User';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loginService : any = LoginService;
  user: User  = {} as User
  constructor( loginService: LoginService, private userStorage : Store<{user: User}>) {
    this.loginService = loginService
    this.userStorage.select('user').subscribe((res) => {
      this.user = res;
      console.log(this.user,'USER');
      console.log(this.user.role[0],'ROLA')
    })
   }

  ngOnInit(): void {
  }
  showSubMenu: boolean = false;
  // Funkcija koja će se pozvati kada se klikne na podmeni stavke
  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
}
