import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}
@Component({
  selector: 'app-testimonials',
  imports: [NgIcon, CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      role: 'CEO',
      company: 'TechStart',
      content:
        'Memento Coding completely transformed our digital presence. Their team fully understood our vision and executed it flawlessly.',
      avatar:
        'https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'CTO',
      company: 'InnovaCorp',
      content:
        'The code quality and attention to detail are exceptional. Our project was delivered on time and exceeded all expectations.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'Directora de Marketing',
      company: 'DigitalPro',
      content:
        'An incredible experience working with Memento Coding. Their professional approach and constant communication made the entire process very smooth.',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 2,
    },
  ];

  currentTestimonial = 0;

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonial =
      this.currentTestimonial === 0 ? this.testimonials.length - 1 : this.currentTestimonial - 1;
  }

  goToTestimonial(index: number): void {
    this.currentTestimonial = index;
  }
}
