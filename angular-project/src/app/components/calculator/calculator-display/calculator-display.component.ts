import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  imports: [CommonModule],
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.scss'
})
export class CalculatorDisplayComponent {
  @Input() displayValue: string = "";
  @Input() isDarkMode: boolean = false;
}
