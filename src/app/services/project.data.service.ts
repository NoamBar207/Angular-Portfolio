import { Injectable } from '@angular/core';
import projectData from '../../assets/json/project.json';
import { IProjectData } from '../interfaces/project.data.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  constructor() {}

  private _projectData: IProjectData[] = projectData;

  private _projectData$ = new BehaviorSubject<IProjectData[]>([]);
  public projectData$ = this._projectData$.asObservable();

  public query() {
    this._projectData$.next(projectData);
  }

  public getById(id: string): Observable<IProjectData> {
    const project: IProjectData = this._projectData.find(
      (project: IProjectData) => project._id === id
    )!;
    return of(project);
  }
}
