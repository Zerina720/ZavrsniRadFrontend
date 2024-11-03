import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IzborZaListu } from './interfaces/IzborZaListu';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class IzbornaLService {
  url = 'https://localhost:7136/api/'
  constructor(private http:HttpClient) { }
  getListe()
  {
    return this.http.get<any>(`${this.url}IzbornaL/pregledajListe`);
  }
   prijaviListu(user:any)
   {
     return this.http.post<any>(`${this.url}Stranka/prijaviIzbListu`,user);
   }
   createLista(lista: any)
   {
     return this.http.post<any>(`${this.url}IzbornaL/kreirajListu`, lista);
   }
   createNosilacL(nosilac: any)
   {
     return this.http.post<any>(`${this.url}NosilacListe/kreirajNosioca`, nosilac);
   }
   getListeById(id:any)
   {
    return this.http.get<any>(`${this.url}IzbornaL/PrikaziListeKojimaPripada/${id}`)
   }
   getUserCekanje(id:any)
   {
    return this.http.get<any>(`${this.url}IzbornaL/UserNaCekanju/${id}`)
   }
   povuciKandidaturu(id:any)
  {
    return this.http.put<any>(`${this.url}IzbornaL/PovuciKandidaturu/${id}`,null);
  }
   getNosilacById(id:any)
   {
    return this.http.get<any>(`${this.url}NosilacListe/GetNosilacById/${id}`)
   }
   getKorisniciNaIstojL(id:any)
   {
    return this.http.get<any>(`${this.url}Stranka/pregledajKorisnikeNaIstojListi/${id}`)
   }
  /*prijaviListu(user: IzborZaListu): Observable<IzborZaListu> {
    console.log('uslo je');
    //https://localhost:7045/api/Stranka/prijaviIzbListu
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(`${this.url}Stranka/prijaviIzbListu`);
    return this.http.post<IzborZaListu>(`${this.url}Stranka/prijaviIzbListu`,JSON.stringify(user), httpOptions).pipe(
      tap(user => console.log(user))
    );
  }*/

}
