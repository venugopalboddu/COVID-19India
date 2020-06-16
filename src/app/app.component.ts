import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  data:any;
  sdata:any;

  constructor(private ds: ApiService){ 
    this.getData();
    this.getStates();
  }
  getData(){
  this.ds.getCon().subscribe((res)=>{
    this.data = res;
    console.log("Con", this.data);
  })
  }
  getStates(){
    this.ds.getSt().subscribe((resp)=>{
     this.sdata = resp;
     console.log("State", this.sdata);
    })
  }
}
