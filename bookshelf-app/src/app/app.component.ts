import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClient]
})

export class AppComponent {

  currentView = 'home';

  onNavigate(view: string) {
    this.currentView = view;
  }

  title = 'bookshelf-app';
}
