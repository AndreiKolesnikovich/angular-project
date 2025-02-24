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
}
