import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IzboriService {
  url = 'https://localhost:7136/api/'
  constructor(private http:HttpClient) { }
  getIzbori()
  {
    return this.http.get<any>(`${this.url}Izbori/pregledajIzbore`);
  }
  prijaviListuNaIzb(lista:any)
   {
     return this.http.post<any>(`${this.url}IzbornaL/ListaNaIzb`,lista);
   }
   createIzbori(izbori: any)
  {
    return this.http.post<any>(`${this.url}Izbori/kreirajIzbore`, izbori);
  }
  getAllTips()
  {
      return this.http.get<any>(`${this.url}Izbori/pregledajTipIzbora`);
  }
  deleteIzbori(id:string)
  {
    return this.http.delete<any>(`${this.url}Izbori/izbrisiIzbore/${id}`);
  }
}
