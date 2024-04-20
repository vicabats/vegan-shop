import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchTerm: string = '';


  constructor(private router: Router) { }

  public redirectToHomepage() {
    this.router.navigate([""]);
    this.clearSearchTerm();
  }

  public redirectToSearch() {
    this.router.navigate(["search", this.searchTerm]);
    this.searchTerm = '';
  }

  public redirectToLogin() {
    this.router.navigate(["signin"]);
  }

  private clearSearchTerm() {
    this.searchTerm = '';
  }
}
