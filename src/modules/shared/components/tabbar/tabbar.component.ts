import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabbar',
  standalone: true,
  imports: [],
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.css'
})
export class TabbarComponent {

  constructor(private router: Router) { }

  redirectToSearch(param: string) {
    if (param === "news") {
      this.router.navigate([""]);
    } else {
      this.router.navigate(["not_found"]);
    }
  }
}
