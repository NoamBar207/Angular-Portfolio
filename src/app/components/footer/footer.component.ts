import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

interface navLink {
  title: string;
  ref: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('project')) this.isHomePage = false;
        else this.isHomePage = true;
      }
    });
  }

  isHomePage: boolean = true;

  homeLinks: navLink[] = [
    { title: 'Home', ref: 'hero-container' },
    { title: 'About', ref: 'about-me-container' },
    { title: 'Experience', ref: 'skills-cmp-container' },
    { title: 'Projects', ref: 'projects-contianer' },
    { title: 'Contact', ref: 'contact-container' },
  ];

  projectLinks: navLink[] = [
    { title: 'About Project', ref: 'about-project-container' },
    { title: 'Features', ref: 'project-features-container' },
    { title: 'Showcase', ref: 'project-showcase-container' },
  ];

  ngOnInit(): void {}

  scroll(elId: string): void {
    if (!this.isHomePage && elId === 'hero-container')
      this.router.navigate(['/']);
    let el: HTMLElement = document.getElementById(elId)!;
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
