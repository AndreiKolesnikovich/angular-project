import { Component } from '@angular/core';
import { CalculatorDisplayComponent } from '../calculator-display/calculator-display.component';
import { ButtonInputOutputType, ActionType, CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorDisplayComponent, CalculatorButtonComponent],
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
      case ActionType.DarkMode: {
        this.isDarkMode = true;
        break;
      }
      case ActionType.LightMode: {
        this.isDarkMode = false;
        break;
      }
    }
  }
}
