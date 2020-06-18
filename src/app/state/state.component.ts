import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  sdata:any;
  dis:any;
  dataIs:any;

  constructor(private ar: ActivatedRoute, private ds: ApiService) { }

  ngOnInit() {
    console.log(this.ar.snapshot.params.state);
    var m = this.ar.snapshot.params.state;

    this.ds.getSt().subscribe((resp)=>{
      this.sdata = resp;
      console.log("State", this.sdata);

      this.dataIs = this.sdata.find(x => x.state === m);
      //console.log(this.dataIs);
      this.dis = Array.of(this.dataIs);
      console.log("TeD", this.dis);

     });
  }
}
