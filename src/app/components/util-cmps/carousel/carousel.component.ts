import { IShowcase } from 'src/app/interfaces/project.data.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() showcase!: IShowcase[];
  @Input() index!: number;
  @Output() onMouseLeave = new EventEmitter<string>();
  @Input() windowWidth!: number;
  @ViewChild('fullScreenImg') fullScreenImg!: ElementRef;

  public imgClicked!: string;

  constructor() {}

  onExitCarousel() {
    console.log('hey');

    this.onMouseLeave.emit();
  }

  onImgClick(imgUrl: string) {
    // console.log('hey');
    if (imgUrl === 'exit')
      this.fullScreenImg.nativeElement.style.display = 'none';
    else {
      this.fullScreenImg.nativeElement.style.display = 'flex';
      this.imgClicked = imgUrl;
    }
  }

  ngOnInit(): void {
    // this.slides[0] = {
    //   id: 0,
    //   src: './assets/img/angular.jpg',
    //   title: 'First slide',
    //   subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    // };
    // this.slides[1] = {
    //   id: 1,
    //   src: './assets/img/react.jpg',
    //   title: 'Second slide',
    //   subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // };
    // this.slides[2] = {
    //   id: 2,
    //   src: './assets/img/vue.jpg',
    //   title: 'Third slide',
    //   subtitle:
    //     'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    // };
  }
}
