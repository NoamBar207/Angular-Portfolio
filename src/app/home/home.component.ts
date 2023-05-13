import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interfaces/project.model';
import { IDevelopTech } from '../interfaces/skill.model';
import { ProjectService } from '../services/project.service';
import { SkillsService } from '../services/skills.service';
import { ViewportScroller } from '@angular/common';
import { INavButton } from '../interfaces/nav.button.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private skillsService: SkillsService,
    private viewPortScroller: ViewportScroller
  ) {}

  projects$!: Observable<IProject[]>;
  developTech$!: Observable<IDevelopTech[]>;
  navButtons: INavButton[] = [
    {
      title: 'Home',
      ref: 'hero-container',
      icon: 'fa-solid fa-house',
    },
    {
      title: 'About Me',
      ref: 'about-me-container',
      icon: 'fa-solid fa-address-card',
    },
    {
      title: 'Skills',
      ref: 'skills-cmp-container',
      icon: 'fa-solid fa-list-check',
    },
    {
      title: 'Projects',
      ref: 'projects-contianer',
      icon: 'fa-solid fa-file-lines',
    },
    {
      title: 'Contact Me',
      ref: 'contact-container',
      icon: 'fa-solid fa-address-book',
    },
  ];

  ngOnInit(): void {
    this.projectService.query();
    this.projects$ = this.projectService.projects$;

    this.skillsService.query();
    this.developTech$ = this.skillsService.developTech$;
  }

  scrollTo(elRefName: string): void {
    this.viewPortScroller.scrollToAnchor(elRefName);
  }
}
