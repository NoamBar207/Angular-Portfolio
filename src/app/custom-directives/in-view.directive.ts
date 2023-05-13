import {
  AfterViewInit,
  Directive,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

interface IOptions {
  root: null;
  rootMargin: string;
  threshold: number;
}

@Directive({
  selector: '[inView]',
})
export class InView implements AfterViewInit {
  alreadyRendered!: boolean; // cheking if visible already

  constructor(
    private vcRef: ViewContainerRef,
    private tplRef: TemplateRef<any>
  ) {}

  options: IOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.5,
  };

  ngAfterViewInit() {
    const commentEl = this.vcRef.element.nativeElement; // template
    const elToObserve = commentEl.parentElement;
    this.setMinWidthHeight(elToObserve);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.renderContents(entry.isIntersecting);
        });
      },
      this.options
      // { threshold: [0, 0.1, 0.9, 1] }
    );
    observer.observe(elToObserve);
  }

  renderContents(isInView: boolean) {
    if (isInView && !this.alreadyRendered) {
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.tplRef);
      this.alreadyRendered = true;
      console.log('hye');
    }
  }

  setMinWidthHeight(el: HTMLElement) {
    // prevent issue being visible all together
    const style = window.getComputedStyle(el);
    const [width, height] = [parseInt(style.width), parseInt(style.height)];
    !width && (el.style.minWidth = '40px');
    !height && (el.style.minHeight = '40px');
  }
}
