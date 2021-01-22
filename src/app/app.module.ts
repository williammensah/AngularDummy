import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      {
        path:'',
        component:CustomerFormComponent
      },
      {
        path:'customers',
        component:UserFormComponent
      }
    ])
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
