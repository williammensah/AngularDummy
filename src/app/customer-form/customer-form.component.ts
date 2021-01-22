import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customers:any;
  constructor(private service:CustomerService) { }

  ngOnInit() {
    this.service.getCustomers()
       .subscribe(response =>{
        this.customers = response['data']
        console.log(this.customers)
       })
  }

  deleteCustomer(id){
    this.service.deleteCustomers(id)
        .subscribe(response=>{
          let index = this.customers.indexOf(id)
          this.customers.splice(index,1);
        },
        (error:Response) =>{
          if (error.status === 404) {
           alert('An unexpected error occurred.');
          }
          else{
            alert('An unexpected error occurred.');
          }
       
        })
  }

}
