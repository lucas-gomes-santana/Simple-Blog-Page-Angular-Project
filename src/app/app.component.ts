import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTopBarComponent } from "./components/menu-top-bar/menu-top-bar.component";;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuTopBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projeto-Blog';
}
