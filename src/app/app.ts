import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

  profile = {
    name: 'Anil Lama',
    title: 'Senior Software Engineer',
    description: 'Software Developer | Building Scalable Microservices with Java & Spring Boot',
    email: 'alamacs19@gmail.com',
    location: 'Dallas, TX'
  };

  skills = {
    languages: ['TypeScript', 'Python', 'Go'],
    backend: ['Node.js', 'PostgreSQL', 'Redis'],
    cloud: ['AWS', 'Kubernetes', 'Docker']
  };

  experience = [
    {
    role: 'Java Developer – Backend',
    company: 'Hilton Hotels',
    period: 'May 2024 - Present',
    description:
      'Designed and developed scalable microservices using Java and Spring Boot. Built RESTful APIs, integrated Kafka for real-time data streaming, optimized PostgreSQL queries, and supported CI/CD pipelines. Collaborated with cross-functional teams and mentored junior developers.'
  },
  {
    role: 'Full Stack Java Developer',
    company: 'PNC Bank',
    period: 'Dec 2022 - May 2024',
    description:
      'Developed full-stack applications using Angular and Spring Boot. Implemented secure REST APIs with OAuth and JWT, optimized SQL queries, supported system integrations, and worked in Agile Scrum teams to deliver enterprise banking solutions.'
  },
  {
    role: 'Full Stack Software Developer',
    company: 'United Health Group',
    period: 'Aug 2020 - Dec 2022',
    description:
      'Built healthcare microservices using Spring Boot and REST APIs. Worked across full SDLC, developed Angular UI components, optimized PL/SQL queries, implemented Docker-based environments, and supported production systems.'
  },
  {
    role: 'Java Developer – Backend',
    company: 'FirstBank',
    period: 'Aug 2019 - Aug 2020',
    description:
      'Developed backend services for high-value financial transactions. Created REST APIs, optimized Oracle SQL queries, implemented logging and auditing, and automated builds using Jenkins and Maven.'
  }];

}
