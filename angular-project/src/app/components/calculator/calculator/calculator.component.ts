import { Component } from '@angular/core';
import { CalculatorDisplayComponent } from '../calculator-display/calculator-display.component';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorDisplayComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {
  title = 'Calculator';
  displayData: string = "";

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
}
