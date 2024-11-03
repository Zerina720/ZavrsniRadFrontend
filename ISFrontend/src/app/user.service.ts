import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://localhost:7136/api/"
  url2 = "https://localhost:7136/role"

  constructor(private http : HttpClient) { }
  
  getAllRoles()
  {
      return this.http.get<any>(this.url2);
  }
  getAll()
  {
    return this.http.get<any>(`${this.url}Stranka`)
  }
  getNepotvrdjeni()
  {
    return this.http.get<any>(`${this.url}Stranka/nepotvrdjeniKorisnici`)
  }
  getNeblokirani()
  {
    return this.http.get<any>(`${this.url}Stranka/neBlokirani`)
  }
  createUser(user: any)
  {
    return this.http.post<any>(`${this.url}Stranka/registracija`, user);
  }
  deleteUser(id:number)
  {
    return this.http.delete<any>(`${this.url}Stranka/izbrisiUsera/${id}`);
  }
  prihvatiKorisnika(id:number)
  {
    return this.http.put<any>(`${this.url}Stranka/PotvrdiKorisnika/${id}`, null);
  }
  blokirajKorisnika(id:number)
  {
    return this.http.put<any>(`${this.url}Stranka/BlokirajKorisnika/${id}`,null)
  }
  getZahtevi(id:any)
   {
    return this.http.get<any>(`${this.url}Stranka/naCekanju/${id}`)
   }
   prihvatiZahtev(id:number)
   {
     return this.http.put<any>(`${this.url}Stranka/PrihvatiKorisnikaNaListu/${id}`, null);
   }
   odbijZahtev(id:string)
   {
     return this.http.put<any>(`${this.url}Stranka/OdbijZahtevZaListu/${id}`,null);
   }
}
