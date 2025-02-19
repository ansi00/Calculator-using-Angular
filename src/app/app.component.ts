import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';

 calValue : number = 0;
 funcT : any = 'noFunction';
 calNumber : string = 'noValue';

 firstNumber : number = 0;
 secondNumber : number = 0;

 onClickValue(val : string  , type  : any){
  // console.log(val , type);
  if(type == 'number'){
    this.onNumberClick(val)
  }
  else if(type == 'function'){
    this.onFunctionClick(val);
  }
 }

 onNumberClick(val : string){
if(this.calNumber != 'noValue'){
  this.calNumber = this.calNumber + val;
}else{
  this.calNumber = val;
}

this.calValue = parseFloat(this.calNumber);
 }

 onFunctionClick(val : string){

  if(val == 'c'){
    this.clearAll();
  }
else if(this.funcT == 'noFunction'){
  this.firstNumber = this.calValue;
  this.calValue = 0;
  this.calNumber = 'noValue';
  this.funcT = val;
}
else if (this.funcT != 'noFunction') {
this.secondNumber = this.calValue;
this.calculateValue(val);
}
 }

 calculateValue(val : string){
if(this.funcT == '+'){
 const total =  this.firstNumber + this.secondNumber;
 this.totalAssignValues(total , val);
 
}
if(this.funcT == '-'){
  const total =  this.firstNumber - this.secondNumber;
  this.totalAssignValues(total , val);
 }
 if(this.funcT == '*'){
  const total =  this.firstNumber * this.secondNumber;
 this.totalAssignValues(total , val);
 }
 if(this.funcT == '/'){
  const total =  this.firstNumber / this.secondNumber;
 this.totalAssignValues(total , val);
 }
 if(this.funcT == '%'){
  const total =  this.firstNumber % this.secondNumber;
 this.totalAssignValues(total , val);
 }
 }

 totalAssignValues(total : number, val : string){
  this.calValue = total;
  this.firstNumber = total;
  this.secondNumber = 0;
  this.calNumber = 'noValue';
  this.funcT = val;
  if(val == '='){this.onEqualPress()};
 }

 onEqualPress(){
  this.firstNumber = 0;
  this.secondNumber = 0;
  this.funcT = 'noFunction';
  this.calNumber = 'noValue'
 }

 clearAll(){
  this.firstNumber = 0;
  this.secondNumber = 0;
  this.calValue = 0;
  this.funcT = 'noFunction';
  this.calNumber = 'noValue'
 }

}
