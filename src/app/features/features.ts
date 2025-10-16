import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-features',
  imports: [CommonModule, NgIcon],
  templateUrl: './features.html',
  styleUrl: './features.css',
  standalone: true,
})
export class Features {
  features: Feature[] = [
    {
      id: 1,
      icon: 'heroGlobeAlt',
      title: 'Software Development',
      description:
        'Modern and responsive web applications with Angular, React, and Vue.js. Optimized for SEO and performance.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: 'heroDevicePhoneMobile',
      title: 'Mobile Apps',
      description:
        'Native and hibrid aplications for IOS and Android. Exceptional user experience on any device.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: 'heroCloudArrowUp',
      title: 'Cloud & DevOps',
      description:
        'Scalable cloud infrastructure and automated CI/CD. AWS, Azure, and Google Cloud.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      icon: 'heroCpuChip',
      title: 'IA & Machine Learning',
      description:
        'Intelligent solutions with AI/ML. Automation and data analytics to boost your business.',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      icon: 'heroShieldCheck',
      title: 'Cybersecurity',
      description:
        'Comprehensive data and application protection. Security audits and implementation of best practices.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      icon: 'heroCog8Tooth',
      title: 'Tech consulting',
      description:
        'Specialized technical consulting and software architecture. System optimization and modernization.',
      color: 'from-teal-500 to-blue-500',
    },
  ];
}
