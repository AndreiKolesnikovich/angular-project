import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-angular-project-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './angular-project-header.component.html',
  styleUrl: './angular-project-header.component.scss'
})
export class AngularProjectHeaderComponent {

}
