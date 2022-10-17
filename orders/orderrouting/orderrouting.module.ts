import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from '../orderlist/orderlist.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'', component:OrderlistComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class OrderroutingModule { }
