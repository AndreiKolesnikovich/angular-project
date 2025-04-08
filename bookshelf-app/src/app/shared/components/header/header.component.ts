import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './../../../core/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userName: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      console.log(user);
      this.isLoggedIn = user != null;
      this.userName = user ? user.username : null;
    });
  }

  onSignOut() {
    this.authService.signOut();
  }
}