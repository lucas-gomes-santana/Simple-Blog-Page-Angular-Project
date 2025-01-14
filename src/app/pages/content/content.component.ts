import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../dataBase/dataFake';
import { rmSync } from 'fs';


@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
    this.id = value.get("id")
    );

    this.componentsValue(this.id);
  }

  componentsValue(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0];

    this.cardTitle = result.title;
    this.cardText = result.text;
    this.cardImage = result.image;
  }

  cardImage:string = "";
  cardTitle:string = "";
  cardText:string = "";

  private id:string | null = "0";
}
