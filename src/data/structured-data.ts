import { links } from '../i18n/ui.ts';

// The person's schema.org description, plus Sanctuary, the design system they
// made. Both identifiers are shared with sanctuary-ds.github.io, which declares
// the same entities: search engines join two descriptions that use the same @id
// into one, so the site and Sanctuary are read as the work of one person.
const person = { '@id': 'https://anthonyportugal.github.io/#person' };

export function structuredData(jobTitle: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        ...person,
        name: 'Anthony Portugal',
        alternateName: ['Anthony Portugal Robles', 'Brucee Anthony Portugal Robles'],
        givenName: 'Anthony',
        familyName: 'Portugal Robles',
        url: 'https://anthonyportugal.github.io',
        sameAs: [links.github, links.linkedin],
        jobTitle,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'PE',
        },
        knowsAbout: [
          'Design Systems',
          'Design Tokens',
          'Frontend Architecture',
          'Clean Architecture',
          'TypeScript',
          'Vue',
          'Flutter',
          'Linux',
          'AI-assisted software engineering',
        ],
      },
      {
        '@type': 'SoftwareSourceCode',
        '@id': 'https://sanctuary-ds.github.io/#design-system',
        name: 'Sanctuary',
        url: 'https://sanctuary-ds.github.io/',
        author: person,
        creator: person,
      },
    ],
  };
}
