import { Component, Input, OnInit } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import type { Engine, Container } from 'tsparticles-engine';

@Component({
  selector: 'particels',
  templateUrl: './particels.component.html',
  styleUrls: ['./particels.component.scss'],
})
export class ParticelsComponent {
  constructor() {}

  @Input() maxNumber!: number;

  particlesOptions = {
    background: {
      color: {
        value: '#1f242d',
      },
    },
    fullScreen: { enable: false },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        // value: '#98B0A8',
        value: '#27ab8c',
      },
      links: {
        color: '#FFF',
        // color: '#27ab8c',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
        limit: this.maxNumber,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {}

  async particlesInit(engine: Engine): Promise<void> {
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
