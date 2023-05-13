import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProject } from '../interfaces/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  private _projectsDb: IProject[] = [
    {
      name: 'Mellofy',
      info: 'Spotify clone + Chat app, built using MERN stack. E2E project.',
      _id: 'mellofy',
      img: 'https://res.cloudinary.com/noambar/image/upload/v1673889648/Portfolio/Projects/fotor_2023-1-16_19_18_55_qoi3f3.png',
      link: 'https://mellofy-bynoambar.onrender.com/',
    },
    {
      name: 'Mello',
      info: 'Trello clone, built using MERN stack. E2E project.',
      _id: 'mello',
      img: 'https://res.cloudinary.com/noambar/image/upload/v1673948000/Portfolio/Projects/fotor_2023-1-17_11_32_59_oadhqw.png',
      link: 'https://mello-r9cy.onrender.com/',
    },
    {
      name: 'MisterBitcoin',
      info: 'Bit inspired, wallet app, built using Angular & TypeScript.',
      _id: 'misterbitcoin',
      img: 'https://res.cloudinary.com/noambar/image/upload/v1675160598/Portfolio/Projects/MisterBitcoinAngularFullPic_vhsjw5.png',
      link: 'https://noambar207.github.io/MisterBitcoin-Angular/#/',
    },
    {
      name: 'Meme Generator',
      info: 'Genarte your own memes. built using HTML5, CSS and JS.',
      _id: 'memegenerator',
      img: 'https://res.cloudinary.com/noambar/image/upload/v1674149177/Portfolio/Projects/fotor_2023-1-19_19_25_50_pdpwuq.png',
      link: 'https://memegenerator-noambar.onrender.com/',
    },
    {
      name: 'Mine Sweeper',
      info: 'The game with extra featuers. built using HTML5, CSS and JS.',
      _id: 'minesweeper',
      img: 'https://res.cloudinary.com/noambar/image/upload/v1674565363/Portfolio/Projects/fotor_2023-1-24_15_2_3_xeqxeq.png',
      link: '',
    },
    {
      name: 'My Old Portfolio',
      info: 'My Portfolio. Built using Vue, Sass and JS.',
      _id: 'portfolio',
      img: 'https://res.cloudinary.com/noambar/image/upload/v1675073347/Portfolio/Projects/PortfolioFullPic_fvdg8i.png',
      link: '',
    },
  ];

  private _projects$ = new BehaviorSubject<IProject[]>([]);
  public projects$ = this._projects$.asObservable();

  public query() {
    this._projects$.next(this._projectsDb);
  }

  public getById(projectId: string): Observable<IProject> {
    const project = this._projectsDb.find(
      (project) => project._id === projectId
    )!;
    return of({ ...project });
  }
}
