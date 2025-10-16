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
  heroCloudArrowUp,
  heroCpuChip,
  heroShieldCheck,
  heroCog8Tooth,
  heroStar,
  heroChevronLeft,
  heroChevronRight,
  heroSquare2Stack,
  heroPhone,
  heroMapPin,
} from '@ng-icons/heroicons/outline';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@Component({
  selector: 'app-root',
  imports: [Header, Hero, Features, Testimonials, Footer, FontAwesomeModule],
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
      heroSparkles,
      heroCloudArrowUp,
      heroCpuChip,
      heroShieldCheck,
      heroCog8Tooth,
      heroStar,
      heroChevronLeft,
      heroChevronRight,
      heroSquare2Stack,
      heroPhone,
      heroMapPin
    }),
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('memento-coding-website');
  
}
