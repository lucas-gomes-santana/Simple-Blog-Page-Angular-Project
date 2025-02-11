import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secondary-cards',
  imports: [RouterModule],
  templateUrl: './secondary-cards.component.html',
  styleUrl: './secondary-cards.component.scss'
})
export class SecondaryCardsComponent {

  @Input()
  cardImage:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  id:string = "0";
}
