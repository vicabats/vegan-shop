import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../modules/shared/components/navbar/navbar.component';
import { TabbarComponent } from '../modules/shared/components/tabbar/tabbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../modules/shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TabbarComponent, HttpClientModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vegan-shop';
}
