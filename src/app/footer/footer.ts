import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import {simpleFacebook, simpleGithub, simpleInstagram, simpleX} from '@ng-icons/simple-icons'
@Component({
  selector: 'app-footer',
  imports: [CommonModule, NgIcon,],
  providers:[provideIcons({simpleFacebook, simpleGithub, simpleX, simpleInstagram})],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'LinkedIn', icon: 'simpleFacebook', url: '#' },
    { name: 'GitHub', icon: 'simpleGithub', url: '#' },
    { name: 'Twitter', icon: 'simpleX', url: '#' },
    { name: 'Instagram', icon: 'simpleInstagram', url: '#' },
  ];
}
