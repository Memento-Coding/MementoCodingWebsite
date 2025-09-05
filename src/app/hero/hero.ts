import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly title = signal('Memento Coding - Agile software development');
  protected readonly subtitle = signal('We build high-quality software solutions tailored to your business needs.');
  protected readonly ctaText = signal('Get Started');
}
