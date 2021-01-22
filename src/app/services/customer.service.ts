import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private url = 'http://localhost:8000/api/v1/customers';
  constructor(private http: HttpClient) {}

   getCustomers(){
    return this.http.get(this.url);
   }

   createCustomers(data){
     return this.http.post(this.url,data);
   }
  
   deleteCustomers(id){
    return this.http.delete(this.url + '/' + id);
   // )
  }
}
