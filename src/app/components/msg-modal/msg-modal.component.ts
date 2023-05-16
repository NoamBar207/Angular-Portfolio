import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msg-modal',
  templateUrl: './msg-modal.component.html',
  styleUrls: ['./msg-modal.component.scss'],
})
export class MsgModalComponent implements OnInit {
  @Input() msg!: string;
  @Input() mailResponseStyle!: string;

  ngOnInit() {}
}
