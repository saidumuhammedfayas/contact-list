import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  get: any;

  constructor(private http:HttpClient) { }


  allcontacts(){
    return this.http.get('https://dummyjson.com/users')
  }
}
