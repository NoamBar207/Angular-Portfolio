import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ProjectListComponent } from './components/projects-list/projects-list.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { NgParticlesModule } from 'ng-particles';
import { ParticelsComponent } from './components/hero/particels/particels.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MediaBtnsComponent } from './components/util-cmps/media-btns/media-btns.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SectionHeaderComponent } from './components/util-cmps/section-header/section-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { CardComponent } from './components/util-cmps/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CarouselComponent } from './components/util-cmps/carousel/carousel.component';
import { CarouselModule } from '@coreui/angular';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { ProjectFeaturesComponent } from './components/project-features/project-features.component';
import { MsgModalComponent } from './components/msg-modal/msg-modal.component';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeroComponent,
    ParticelsComponent,
    SkillsComponent,
    MediaBtnsComponent,
    AboutMeComponent,
    SectionHeaderComponent,
    FooterComponent,
    AppNavBarComponent,
    CardComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    ProjectPreviewComponent,
    HomeComponent,
    CarouselComponent,
    AboutProjectComponent,
    ProjectCarouselComponent,
    ProjectFeaturesComponent,
    MsgModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    NgxTypewriterComponent,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
