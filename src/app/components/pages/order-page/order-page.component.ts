import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {

  sugarOptions = [0,1,2,3,4,5];
  drinkOptions = [
    "Cappuccino",
    "Tea",
    "Latte",
    "Milo",
    "Hot Chocolate"
  ];

  @ViewChild("drinkSelection") drinkSelection: ElementRef;
  @ViewChild("sugarSelection") sugarSelection: ElementRef;
  @ViewChild("milkNo") milkNo: ElementRef;

  addOrder() {
    console.log(this.drinkSelection.nativeElement.value);
    console.log(this.sugarSelection.nativeElement.value);
    console.log(this.milkNo.nativeElement.checked);
  }

  clearOrder() {
    this.drinkSelection.nativeElement.value = this.drinkOptions[0];
    this.sugarSelection.nativeElement.value = this.sugarOptions[0];
    this.milkNo.nativeElement.checked = false;
  }

}
