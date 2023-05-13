import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDevelopTech, ISkill } from '../interfaces/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  private frontendSkills: ISkill[] = [
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'Bootstrap',
    },
    {
      name: 'TailwindCSS',
    },
    {
      name: 'SCSS',
    },
  ];
  private backendSkills: ISkill[] = [
    {
      name: 'Node.Js',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'Socket.io',
    },
    {
      name: 'Express.js',
    },
    {
      name: 'MySQL',
    },
  ];
  private langAndFrameSkills: ISkill[] = [
    {
      name: 'JavaScript',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'React',
    },
    {
      name: 'Angular',
    },
    {
      name: 'Vue',
    },
    {
      name: 'C',
    },
    {
      name: 'C++',
    },
  ];

  private _developTechDb: IDevelopTech[] = [
    {
      name: 'Frontend Development',
      techSkills: this.frontendSkills,
    },
    {
      name: 'Backend Development',
      techSkills: this.backendSkills,
    },
    {
      name: 'Languages / Frameworks',
      techSkills: this.langAndFrameSkills,
    },
  ];

  private _developTech$ = new BehaviorSubject<IDevelopTech[]>([]);
  public developTech$ = this._developTech$.asObservable();

  public query() {
    this._developTech$.next(this._developTechDb);
  }
}
