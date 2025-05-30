import { Component, Input, OnInit } from '@angular/core';
import { ISectionHeader } from 'src/app/interfaces/section-header.model';
import { IDevelopTech } from 'src/app/interfaces/skill.model';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  @Input() developTech!: IDevelopTech[];

  info: ISectionHeader = {
    main: 'MY SKILLS',
    prev: 'What Skills I Have',
  };

  ngOnInit(): void {}
}
