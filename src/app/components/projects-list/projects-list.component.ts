import { Component, Input, OnInit } from '@angular/core';
import { ISectionHeader } from 'src/app/interfaces/section-header.model';
import { IProject } from '../../interfaces/project.model';

@Component({
  selector: 'project-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  @Input() projects!: IProject[];

  info: ISectionHeader = {
    main: 'MY PROJECTS',
    prev: 'My Recent Work',
  };

  ngOnInit(): void {}
}
