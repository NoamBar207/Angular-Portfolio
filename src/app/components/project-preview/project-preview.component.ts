import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../interfaces/project.model';

@Component({
  selector: 'project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent implements OnInit {
  constructor() {}

  @Input() project!: IProject;

  ngOnInit(): void {}
}
