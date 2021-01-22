import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private service:CustomerService,
    private router:Router ) { }

  submit(f:NgForm){
 
   this.service.createCustomers(f.value)
       .subscribe((response)=>{
       if (response['responseCode'] === 200) {
          Swal.fire('Success!', 'Registration successfull!', 'success')
          this.router.navigate(['']);
       }
     },
      (error:Response)=>{
        if (error.status === 400) {
          alert('An unexpected error occurred.');
          console.log(error);   
        }
         else{
          alert('An unexpected error occurred.');
          console.log(error);  
        }
      });
   
  }

 
  ngOnInit(): void {
  }

}
