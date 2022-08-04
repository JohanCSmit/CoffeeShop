import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './components/pages/history-page/history-page.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';

const routes: Routes = [
  {path: "order", component: OrderPageComponent},
  {path: "history", component: HistoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
