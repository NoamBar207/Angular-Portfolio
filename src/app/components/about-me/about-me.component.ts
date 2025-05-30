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
      desc: '3+ Years (Frontend & Fullstack)',
      icon: 'fa-solid fa-award',
    },
    {
      title: 'Current Role',
      desc: 'Frontend Developer at Moovit',
      icon: 'fa-solid fa-briefcase',
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
