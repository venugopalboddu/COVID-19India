import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  ngOnInit() {
  }
  data:any;
  sdata:any;
  dis:any;
  dataIs:any;

  constructor(private ds: ApiService){ 
    this.getData();
    this.getStates();
  }
  getData(){
  this.ds.getCon().subscribe((res)=>{
    this.data = res;
    //console.log("Con", this.data);
  });
  }
  getStates(){
    this.ds.getSt().subscribe((resp)=>{
     this.sdata = resp;
     //console.log("State", this.sdata);

    });
  }
  // getDistrict(idIs) {
  //   console.log(idIs);
  //   this.dataIs = this.sdata.find(x => x.id === idIs);
  //   console.log(this.dataIs);
  //   this.dis = Array.of(this.dataIs);
  //   console.log("TeD", this.dis);
  //   console.log("district data is "+JSON.stringify(this.dataIs.districtData));
  // }
}
