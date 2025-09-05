import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { Testimonials } from './testimonials/testimonials';
import { Features } from './features/features';
import { Hero } from './hero/hero';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header,Hero,Features,Testimonials,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memento-coding-website');
}
