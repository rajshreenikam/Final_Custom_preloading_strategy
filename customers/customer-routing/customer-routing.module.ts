import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

const custroutes:Routes=[
  {path:'', component:CustomerDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(custroutes)
  ],
  exports:[
    RouterModule
  ]
})
export class CustomerRoutingModule {
  constructor()
{
  console.log('Customer module called');
  
}
 }
