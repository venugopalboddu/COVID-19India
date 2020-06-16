import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCon() {
    return this.http.get('https://api.covidindiatracker.com/total.json');
  }
  getSt(){
    return this.http.get('https://api.covidindiatracker.com/state_data.json');
  }
}
