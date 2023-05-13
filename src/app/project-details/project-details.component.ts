import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../services/project.data.service';
import { IProjectData } from '../interfaces/project.data.model';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ISectionHeader } from '../interfaces/section-header.model';
import { INavButton } from '../interfaces/nav.button.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  constructor(
    private projectDataService: ProjectDataService,
    private route: ActivatedRoute,
    private router: Router,
    private viewPortScroller: ViewportScroller
  ) {}

  project!: IProjectData;
  info!: ISectionHeader;

  navButtons: INavButton[] = [
    {
      title: 'Home',
      ref: 'home',
      icon: 'fa-solid fa-house',
    },
    {
      title: 'Mellofy',
      ref: 'header-container',
      icon: 'fa-brands fa-spotify',
    },
    {
      title: 'About Project',
      ref: 'about-project-container',
      icon: 'fa-solid fa-address-card',
    },
    {
      title: 'Features',
      ref: 'project-cards-container',
      icon: 'fa-solid fa-list-check',
    },
    {
      title: 'Show Case',
      ref: 'project-showcase-container',
      icon: 'fa-solid fa-file-lines',
    },
  ];

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.project = await lastValueFrom(
        this.projectDataService.getById(params['_id'])
      );
      this.info = {
        main: this.project.title.toUpperCase(),
        prev: 'You are Watching',
      };
    });
  }

  scrollTo(elRefName: string): void {
    if (elRefName === 'home') this.router.navigate(['/']);
    this.viewPortScroller.scrollToAnchor(elRefName);
  }
}
