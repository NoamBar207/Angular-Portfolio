import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interfaces/project.model';
import { IDevelopTech } from '../interfaces/skill.model';
import { ProjectService } from '../services/project.service';
import { SkillsService } from '../services/skills.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  constructor(
    private projectService: ProjectService,
    private skillsService: SkillsService
  ) {}

  projects$!: Observable<IProject[]>;
  developTech$!: Observable<IDevelopTech[]>;

  ngOnInit(): void {
    this.projectService.query();
    this.projects$ = this.projectService.projects$;

    this.skillsService.query();
    this.developTech$ = this.skillsService.developTech$;
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}
