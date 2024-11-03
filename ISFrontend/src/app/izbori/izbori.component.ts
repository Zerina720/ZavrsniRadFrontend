import { Component, OnInit } from '@angular/core';
import { IzboriService } from '../izbori.service';
import { IzborZaListu } from '../interfaces/IzborZaListu';
import { ListaNaIzb } from '../interfaces/ListaNaIzb';
import { IzbornaLService } from '../izborna-l.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-izbori',
  templateUrl: './izbori.component.html',
  styleUrls: ['./izbori.component.css']
})
export class IzboriComponent implements OnInit {
  user: User = {} as User;
  lista: any = [];
  _id: any = 0;
  izbori: any = [];
  error: boolean = false;
  errorMsg: any = {};

  constructor(private izboriService: IzboriService, private nosilacLService: IzbornaLService, private userStore: Store<{ user: User }>) {
    this.userStore.select('user').subscribe((res: any) => {
      this.user = res;
      console.log(this.user.user.id);
    });
  }

  getIzbori() {
    this.izboriService.getIzbori().subscribe(
      (res: any) => {
        this.izbori = res;
        console.log(this.izbori);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getIzbori();
    this.nosilacLService.getListeById(this.user.user.id).subscribe(
      (res: any) => {
        if (res != null && res.length > 0) {
          this.lista = res;
          console.log(this.lista);
          this._id = this.lista[0]._id;
        } else {
          this._id = null;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  prijaviIzbListu(izbor: any) {
    if (this._id != null) {
      let prijavaZaIzbore = new ListaNaIzb(izbor.idIzbora, this._id);
      console.log(izbor.idIzbora);
      console.log(this._id);
      this.izboriService.prijaviListuNaIzb(prijavaZaIzbore).subscribe(
        (res) => {
          console.log(res);
          alert("Uspešno ste prijavili izbornu listu na izbore!");
          window.location.reload();
        },
        (error: any) => {
          if (error.status === 400) {
            console.log(error);
            this.error = true;
            this.errorMsg = error?.error?.msg;
            alert(this.errorMsg);
          } else {
            this.error = true;
            console.log(error.error.msg);
            this.errorMsg = error?.error?.error;
          }
        }
      );
    } else {
      alert("Morate imati izbornu listu da biste se prijavili na izbore!");
    }
  }

  // Metoda za prikaz naziva tipa izbora na osnovu tipIzboraId
  getTipIzbora(tipIzboraId: number): string {
    if (tipIzboraId === 1) {
      return 'Lokalni';
    } else if (tipIzboraId === 2) {
      return 'Republički';
    } else if (tipIzboraId === 3) {
      return 'Pokrajinski';
    } else {
      return 'Nepoznato';
    }
  }
}
