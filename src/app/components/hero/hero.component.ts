import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  // @ViewChild('hero-container') nameElementRef: ElementRef;

  roles: string[] = [
    'Full-Stack Developer.',
    'Frontend Developer.',
    'Backend Developer.',
  ];

  ngOnInit(): void {}
}
