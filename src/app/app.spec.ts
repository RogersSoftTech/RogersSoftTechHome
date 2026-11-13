import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { Home } from './home';

describe('home page', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('renders the project links at /home', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/home', Home);
    const links = Array.from(harness.routeNativeElement!.querySelectorAll<HTMLAnchorElement>('.project-card'));

    expect(links.map((link) => [link.querySelector('h3')?.textContent, link.href])).toEqual([
      ['Mass Lottery', 'https://mass-lottery.rogers-soft-tech.com/'],
      ['Engineering Atlas', 'https://engineering-atlas.rogers-soft-tech.com/'],
    ]);
  });

  it('displays the programming languages for each project', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/home', Home);
    const cards = Array.from(harness.routeNativeElement!.querySelectorAll<HTMLElement>('.project-card'));

    expect(cards.map((card) => [
      card.querySelector('.card-content p')?.textContent?.trim(),
      card.querySelector('h3.project-languages')?.textContent?.trim(),
    ])).toEqual([
      ['A Massachusetts Lottery Random Number Generator', 'Built with Dart'],
      ['A Learning Hub for Advanced Software Engineering Skills', 'Built with TypeScript and C#'],
    ]);
  });

  it('redirects the root URL to /home', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/', Home);

    expect(TestBed.inject(Router).url).toBe('/home');
  });

  it('displays the supplied logo', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/home', Home);
    const logo = harness.routeNativeElement!.querySelector<HTMLImageElement>('.hero-art');

    expect(logo?.getAttribute('src')).toBe('/rogers-soft-tech-logo.png');
    expect(logo?.alt).toBe('Rogers Soft Tech logo');
  });
});
