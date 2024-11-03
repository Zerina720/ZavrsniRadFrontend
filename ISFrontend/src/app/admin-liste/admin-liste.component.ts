import { Component, OnInit } from '@angular/core';
import { IzbornaLService } from '../izborna-l.service';

@Component({
  selector: 'app-admin-liste',
  templateUrl: './admin-liste.component.html',
  styleUrls: ['./admin-liste.component.css']
})
export class AdminListeComponent implements OnInit {
  liste : any = [];
  constructor(private izbornaLService :IzbornaLService) { }
  getListe()
  {
    this.izbornaLService.getListe()
    .subscribe((res:any)=>
    {
      this.liste = res;
      console.log(this.liste);
    },
    error=>
    {
      console.log(error)
    })

  }
  ngOnInit(): void {
    this.getListe()
  }

}
