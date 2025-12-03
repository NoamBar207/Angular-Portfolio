import { Component, OnInit, Input } from '@angular/core';
import { ISectionHeader } from 'src/app/interfaces/section-header.model';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent implements OnInit {
  constructor() {}

  @Input() info!: ISectionHeader;

  ngOnInit(): void {}
}
