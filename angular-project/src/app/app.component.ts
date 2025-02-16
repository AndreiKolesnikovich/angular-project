import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';

@Component({
  selector: 'app-root',
  imports: [UserInfoComponent, MoreInfoButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
}
