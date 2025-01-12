import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-secondary-cards',
  imports: [],
  templateUrl: './secondary-cards.component.html',
  styleUrl: './secondary-cards.component.scss'
})
export class SecondaryCardsComponent {

  @Input()
  cardImage:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  cardText:string = "";
}
