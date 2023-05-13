import { Component, OnInit, Input } from '@angular/core';
import { IProjectData } from 'src/app/interfaces/project.data.model';
import { ISectionHeader } from 'src/app/interfaces/section-header.model';

@Component({
  selector: 'project-features',
  templateUrl: './project-features.component.html',
  styleUrls: ['./project-features.component.scss'],
})
export class ProjectFeaturesComponent implements OnInit {
  constructor() {}

  @Input() project!: IProjectData;

  info: ISectionHeader = {
    main: 'FEATURES',
    prev: 'Learn About Some Of The',
  };

  ngOnInit(): void {}
}
