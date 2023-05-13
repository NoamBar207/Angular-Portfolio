import { Component, OnInit, Input } from '@angular/core';
import { IProjectData } from 'src/app/interfaces/project.data.model';

@Component({
  selector: 'about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss'],
})
export class AboutProjectComponent implements OnInit {
  constructor() {}

  info = {
    main: 'ABOUT PROJECT',
    prev: 'Learn More',
  };

  @Input() project!: IProjectData;
  ngOnInit(): void {}
}
