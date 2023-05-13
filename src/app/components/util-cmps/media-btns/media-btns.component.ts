import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'media-btns',
  templateUrl: './media-btns.component.html',
  styleUrls: ['./media-btns.component.scss'],
})
export class MediaBtnsComponent implements OnInit {
  constructor() {}

  @Input() className?: string;

  ngOnInit(): void {}
}
