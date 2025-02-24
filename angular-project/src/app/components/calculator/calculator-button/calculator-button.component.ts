import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-calculator-button',
  imports: [CommonModule],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss'
})
export class CalculatorButtonComponent implements OnInit{

  @Input() inputValue: ButtonInputOutputType = {actionType: ActionType.Clear, value: ''};
  @Output() handleOnButtonClick = new EventEmitter<ButtonInputOutputType>();

  isDarkMode: boolean = false;
  buttonText: string = this.inputValue.value;

  ngOnInit() {
    this.buttonText = this.inputValue.value;
  }

  onButtonClick() {
    if (this.inputValue.actionType==(ActionType.DarkMode | ActionType.LightMode))
      this.isDarkMode=this.inputValue.actionType==ActionType.DarkMode;
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
  DarkMode = 4,
  LightMode = 5
}