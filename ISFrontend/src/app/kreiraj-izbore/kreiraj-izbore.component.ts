import { Component, OnInit } from '@angular/core';
import { IzboriService } from '../izbori.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kreiraj-izbore',
  templateUrl: './kreiraj-izbore.component.html',
  styleUrls: ['./kreiraj-izbore.component.css']
})
export class KreirajIzboreComponent implements OnInit {
  constructor(private izboriService : IzboriService) { }
  today: Date = new Date();
  tips :any = {}
  id:number = 2;
  response : any = {}
  error : boolean = false;
  errorMsg : any = {}
 
  izboriForm = new FormGroup(
    {
     dodatneInfo: new FormControl('',[Validators.required, Validators.minLength(3)]),
        terminIzbora : new FormControl('')

    }
  )
  getTomorrowDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Sutrašnji datum
    return tomorrow.toISOString().slice(0, 10); // Pretvaranje u "yyyy-MM-dd" format
  }
  get terminIzbora(){
    return this.izboriForm.get('terminIzbora')
    }
    get dodatneInfo(){
      return this.izboriForm.get('dodatneInfo')
    }
  ngOnInit(): void {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.izboriForm.get('terminIzbora')?.setValue(tomorrow.toISOString().slice(0, 10));
    this.izboriService.getAllTips()
    .subscribe((res:any) =>
      {
        this.tips = res;
        console.log(this.tips);


      },
      error=>
      {
        console.log(error)
      })
  }
  izaberi()
  {
    console.log("promenjeno")
    this.id =  +(document.getElementById('selectTip') as HTMLInputElement).value;
    console.log(this.id);
  }
  kreirajIzbore()
  {
    if (this.izboriForm.valid) {

    console.log(this.dodatneInfo);
    console.log(this.terminIzbora);
    console.log(this.id)
    let izbori =
    {
      dodatneInfo: this.izboriForm.get('dodatneInfo')?.value,
      tipIzboraId : this.id,
      terminIzbora: this.izboriForm.get('terminIzbora')?.value

    }
    this.izboriService.createIzbori(izbori)
    .subscribe(res =>
      {
        console.log(res);
        this.response = res;
        alert("Dodali ste izbore!");
      },
      (error:any) => {
        if(error.status == 400)
        {
          console.log(error)
           this.error = true;
            this.errorMsg = error?.error?.msg;

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
