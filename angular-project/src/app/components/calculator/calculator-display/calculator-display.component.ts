import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  imports: [],
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.scss'
})
export class CalculatorDisplayComponent {
  @Input() displayValue: string = "";
}
