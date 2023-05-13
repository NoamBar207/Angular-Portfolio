import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { IAboutMeCard } from 'src/app/interfaces/about.me.card.model';
import { ISectionHeader } from 'src/app/interfaces/section-header.model';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  providers: [NgsRevealConfig],
})
export class AboutMeComponent implements OnInit {
  info: ISectionHeader = {
    prev: 'Get To Know',
    main: 'ABOUT ME',
  };

  cardsArr: IAboutMeCard[] = [
    {
      title: 'Experience',
      desc: 'Junior',
      icon: 'fa-solid fa-award',
    },
    {
      title: 'Volunteer',
      desc: '4 Months As FullStack',
      icon: 'fa-solid fa-handshake-angle',
    },
    {
      title: 'Projects',
      desc: '10+ Completed',
      icon: 'fa-solid fa-file-lines',
    },
  ];

  @Output() onScroll = new EventEmitter();

  ngOnInit(): void {}
}
