import { Component, OnInit, Input } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { ISectionHeader } from 'src/app/interfaces/section-header.model';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent implements OnInit {
  constructor(private config: NgsRevealConfig) {
    this.config.mobile = true;
    this.config.origin = 'top';
    this.config.distance = '50px';
  }

  @Input() info!: ISectionHeader;

  ngOnInit(): void {}
}
