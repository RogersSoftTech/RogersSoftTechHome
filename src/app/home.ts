import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

interface Project {
  name: string;
  description: string;
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
      description: 'Explore the Mass Lottery application.',
      url: 'https://mass-lottery.rogers-soft-tech.com/',
      label: 'mass-lottery.rogers-soft-tech.com',
    },
    {
      name: 'Engineering Atlas',
      description: 'Explore the Engineering Atlas application.',
      url: 'https://engineering-atlas.rogers-soft-tech.com/',
      label: 'engineering-atlas.rogers-soft-tech.com',
    },
  ];
}
