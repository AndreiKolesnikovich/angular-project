import { Component } from '@angular/core';
import { AngularProjectFooterComponent } from './components/angular-project-footer/angular-project-footer.component';
import { AngularProjectHeaderComponent } from './components/angular-project-header/angular-project-header.component';

@Component({
  selector: 'app-root',
  imports: [AngularProjectFooterComponent, AngularProjectHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
}
