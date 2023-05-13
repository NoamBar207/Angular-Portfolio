import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import { INavButton } from 'src/app/interfaces/nav.button.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.scss'],
})
export class AppNavBarComponent implements OnInit {
  constructor() {}

  @Output() onScroll = new EventEmitter<string>();
  @Input() navButtons!: INavButton[];

  ngOnInit(): void {}

  scroll(elrRefName: string): void {
    this.onScroll.emit(elrRefName);
  }
}
