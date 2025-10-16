import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { NgIcon } from '@ng-icons/core';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LayoutModule, NgIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  heroArrowRight = 'heroArrowRight';
  heroPlayCircle = 'heroPlayCircle';
  heroCodeBracket = 'heroCodeBracket';
  heroRocketLaunch = 'heroRocketLaunch';
  heroSparkles = 'heroSparkles';
}
