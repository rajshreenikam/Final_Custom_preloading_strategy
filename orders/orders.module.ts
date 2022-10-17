import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderroutingModule } from './orderrouting/orderrouting.module';



@NgModule({
  declarations: [OrderlistComponent],
  imports: [
    CommonModule,
    OrderroutingModule
  ]
})
export class OrdersModule {
constructor()
{
  console.log('orders module called');
  
}
 }
