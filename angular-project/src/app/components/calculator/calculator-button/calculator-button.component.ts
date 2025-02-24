import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-calculator-button',
  imports: [CommonModule],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss'
})
export class CalculatorButtonComponent implements OnInit{
  @Input() isDarkMode: boolean = false;
  @Input() inputValue: ButtonInputOutputType = {actionType: ActionType.Append, value: ''};
  @Output() handleOnButtonClick = new EventEmitter<ButtonInputOutputType>();

  buttonText: string = this.inputValue.value;

  ngOnInit() {
    this.buttonText = this.inputValue.value;
  }

  onButtonClick() {    
    if(this.inputValue.actionType==ActionType.Clear)
      this.inputValue.value ='';
    this.handleOnButtonClick.emit(this.inputValue);
  }
}

export type ButtonInputOutputType ={
  actionType: ActionType,
  value: string
}

export enum ActionType {
  Append = 1,
  Clear = 2,
  Calculate = 3,
  DarkMode = 4
}