import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IProjectData } from 'src/app/interfaces/project.data.model';

@Component({
  selector: 'project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss'],
})
export class ProjectCarouselComponent implements OnInit {
  constructor() {}

  @Input() project!: IProjectData;
  public info = {
    main: 'SHOWCASE',
    prev: 'Try Hovering On The',
  };
  public hoverSlideIdx!: number;
  public getScreenWidth!: number;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth < 600) this.hoverSlideIdx = 1;
    // if (this.getScreenWidth <= 768)
    //   this.info.prev = 'Try Clicking On The Pic Of The';
    // else this.info.prev = 'Try Hovering On The';
  }

  onMouseEnter(event: MouseEvent, i: number): void {
    if (this.getScreenWidth > 600) this.hoverSlideIdx = i + 1;
  }

  onMouseLeave(): void {
    if (this.getScreenWidth > 600) this.hoverSlideIdx = 0;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    // if (this.getScreenWidth <= 768)
    //   this.info.prev = 'Try Clicking On The Pic Of The';
    // else this.info.prev = 'Try Hovering On The';
    if (this.getScreenWidth < 600) this.hoverSlideIdx = 1;
    else this.hoverSlideIdx = 0;
  }
}
