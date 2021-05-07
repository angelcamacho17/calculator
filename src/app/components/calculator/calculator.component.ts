import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public nums = [1,2,3,4,5,6,7,8,9,0];
  public ops = ['+', '-', 'x', '/']
  public result = 0;
  public first = 0
  public sec = 0
  public operator = ''

  constructor() { }

  ngOnInit(): void { }

  public handleOperation(num: number): void {
    if (this.first===0){
      this.first = num
    } else if (this.sec===0) {
      this.sec = num
    } 
    if (this.first!==0 && this.sec!==0 && this.operator!=='') {
      switch(this.operator) {
        case '+': {
          this.result = this.first + this.sec
        }
      }
    }
  }

  public handleOperator(operator: string): void {
    this.operator = operator
  }

}
