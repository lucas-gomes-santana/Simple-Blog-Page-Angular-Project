import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {

  @Input()
  cardImage:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  cardText:string = "";
}
