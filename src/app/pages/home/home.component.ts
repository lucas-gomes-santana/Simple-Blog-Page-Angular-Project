import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SecondaryCardsComponent } from "../../components/secondary-cards/secondary-cards.component";

@Component({
  selector: 'app-home',
  imports: [TitleComponent, BigCardComponent, SecondaryCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
