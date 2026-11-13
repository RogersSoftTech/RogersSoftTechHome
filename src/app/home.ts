import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

interface Project {
  name: string;
  description: string;
  languages: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly projects: readonly Project[] = [
    {
      name: 'Mass Lottery',
      description: 'A Massachusetts Lottery Random Number Generator',
      languages: 'Built with Dart',
      url: 'https://mass-lottery.rogers-soft-tech.com/',
      label: 'mass-lottery.rogers-soft-tech.com',
    },
    {
      name: 'Engineering Atlas',
      description: 'A Learning Hub for Advanced Software Engineering Skills',
      languages: 'Built with TypeScript and C#',
      url: 'https://engineering-atlas.rogers-soft-tech.com/',
      label: 'engineering-atlas.rogers-soft-tech.com',
    },
  ];
}
