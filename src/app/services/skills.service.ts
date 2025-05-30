import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDevelopTech, ISkill } from '../interfaces/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}
  private frontendSkills: ISkill[] = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Vue' },
    { name: 'Redux' },
    { name: 'Next.js' },
    { name: 'SCSS' },
    { name: 'TailwindCSS' },
    { name: 'Figma' },
  ];

  private backendSkills: ISkill[] = [
    { name: 'Express.js' },
    { name: 'MongoDB' },
    { name: 'MySQL' },
    { name: 'Node.Js' },
    { name: 'Socket.io' },
    { name: 'SQL' },
    { name: 'AWS' },
  ];

  private toolSkills: ISkill[] = [
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'C' },
    { name: 'C++' },
    { name: 'ObjectScript' },
    { name: 'Git' },
    { name: 'Jenkins' },
    { name: 'Google Analytics' },
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
      name: 'Languages / Tools',
      techSkills: this.toolSkills,
    },
  ];

  private _developTech$ = new BehaviorSubject<IDevelopTech[]>([]);
  public developTech$ = this._developTech$.asObservable();

  public query() {
    this._developTech$.next(this._developTechDb);
  }
}
