import { Component } from '@angular/core';
import { CalculatorDisplayComponent } from '../calculator-display/calculator-display.component';
import { ButtonInputOutputType, ActionType, CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorDisplayComponent, CalculatorButtonComponent, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {
  title = 'Calculator';
  displayData: string = "";
  isDarkMode: boolean = false;
  
  appendInput(value: string): void {
      this.displayData += value;
  }

  calculate(): void {
      try {
          this.displayData = eval(this.displayData);
      } catch (e) {
        this.displayData = 'Error';
      }
  }

  clear (): void {
    this.displayData = '';
  }

  handleOnButtonClick($event: ButtonInputOutputType){
    switch ($event.actionType){
      case ActionType.Clear: {
        this.displayData = '';
        break;
      }
      case ActionType.Append:{
        this.appendInput($event.value);
        break;
      }
      case ActionType.Calculate:{
        this.calculate();
        break;
      }
      case ActionType.DarkMode: {
        this.isDarkMode = !this.isDarkMode;
        break;
      }
    }
  }

  inputRow1: ButtonInputOutputType[]=
  [
    {value:'Dark/Light Mode', actionType: 4},
    {value:'C', actionType:2}
  ]
  inputRow2: ButtonInputOutputType[]=
  [
    {value:'7', actionType:1},
    {value:'8', actionType:1},
    {value:'9', actionType:1},
    {value:'*', actionType:1}
  ]
  inputRow3: ButtonInputOutputType[]=
  [
    {value:'4', actionType:1},
    {value:'5', actionType:1},
    {value:'6', actionType:1},
    {value:'-', actionType:1}
  ]
  inputRow4: ButtonInputOutputType[]=
  [
    {value:'1', actionType:1},
    {value:'2', actionType:1},
    {value:'3', actionType:1},
    {value:'+', actionType:1}
  ]
  inputRow5: ButtonInputOutputType[]=
  [
    {value:'0', actionType:1},
    {value:'.', actionType:1},
    {value:'=', actionType:3},
    {value:'/', actionType:1}
  ] 
  inputRows = [this.inputRow2, this.inputRow3, this.inputRow4, this.inputRow5]
}
