import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { Testimonials } from './testimonials/testimonials';
import { Features } from './features/features';
import { Hero } from './hero/hero';
import { Header } from './header/header';
import { provideIcons } from '@ng-icons/core';
import {
  heroSun,
  heroMoon,
  heroMagnifyingGlass,
  heroBars3,
  heroXMark,
  heroClock,
  heroDocumentText,
  heroArrowUpRight,
  heroChatBubbleBottomCenterText,
  heroEnvelope,
  heroUsers,
  heroDevicePhoneMobile,
  heroGlobeAlt,
  heroArrowRight,
  heroPlayCircle,
  heroCodeBracket,
  heroRocketLaunch,
  heroSparkles,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Features, Testimonials, Footer],
  standalone: true,
  providers: [
    provideIcons({
      heroSun,
      heroMoon,
      heroMagnifyingGlass,
      heroBars3,
      heroXMark,
      heroClock,
      heroDocumentText,
      heroArrowUpRight,
      heroChatBubbleBottomCenterText,
      heroEnvelope,
      heroUsers,
      heroDevicePhoneMobile,
      heroGlobeAlt,
      heroArrowRight,
      heroPlayCircle,
      heroCodeBracket,
      heroRocketLaunch,
      heroSparkles
    }),
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('memento-coding-website');
}
