import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TestData } from './testData';

@Component({
  selector: 'app-test',
  imports: [NgFor, NgIf],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})


export class TestComponent {
  testData : TestData[] = [
    {id:"1", value:"One"},
    {id:"2", value:"Two"},
    {id:"3", value:"Three"},
  ];

  isVisible: boolean = false;
}
