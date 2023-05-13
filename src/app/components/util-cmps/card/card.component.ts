import { Component, Input, OnInit } from '@angular/core';

interface ICard {
  icon: string;
  title: string;
  desc: string;
  myOwn?: string;
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() card!: ICard;
  ngOnInit(): void {}
}
