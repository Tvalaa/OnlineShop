import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineShop';
  isMenuOpen = false; // Menu gaxsnili patara ekranze
  isScrolled = false; // Sqroli navbarze

  /* Menus xedvadoba */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Gamouyenebeli jerjerobit sqroli
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
}
