import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LayoutModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  isSmallScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
  }
  protected readonly title = signal('Memento Coding - Agile software development');
  protected readonly subtitle = signal(
    'We build high-quality software solutions tailored to your business needs.'
  );
  protected readonly ctaText = signal('Get Started');
}
