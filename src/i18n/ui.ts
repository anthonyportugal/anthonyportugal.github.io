// Interface strings. Long-form content (case studies, experience, open source)
// lives in the content collections under src/content/<collection>/<lang>/.

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const en = {
  meta: {
    title: 'Anthony Portugal | Software Engineer & Frontend Architect',
    description:
      'Anthony Portugal (Anthony Portugal Robles), software engineer and frontend architect from Peru. Decoupled architectures (Clean Architecture, SOLID), Design Systems governance (DTCG, WCAG AA), CI/CD, Linux and AI-assisted engineering. Creator of Sanctuary.',
    jobTitle: 'Software Engineer & Frontend Architect',
    imageAlt:
      'Anthony Portugal, software engineer and frontend architect, looking out of a café window',
  },
  nav: {
    label: 'Main navigation',
    work: 'Work',
    openSource: 'Open source',
    experience: 'Experience',
    about: 'About',
    contact: 'Contact',
    toggle: 'Toggle navigation menu',
  },
  hero: {
    inscription: 'Software engineer · Frontend architect',
    first: 'Anthony',
    last: 'Portugal',
    statement: 'I design systems that teams can build on.',
    ledeBefore:
      'Software engineer and frontend architect from Peru with 7+ years across frontend, backend and infrastructure. I lead technical teams, design decoupled architectures with Clean Architecture and SOLID, govern design systems, and integrate AI agents under engineering rigor. Creator of',
    ledeAfter: ', a design system of stone, glass and light.',
    ctaWork: 'See selected work',
    ctaContact: 'Get in touch',
    facts: [
      { value: '7+ yrs', label: 'in production software' },
      { value: 'Tech lead', label: '2024 – 2026 · multiplatform team' },
      { value: '1 codebase', label: '→ Android, iOS, Windows, Linux, macOS' },
    ],
    portraitAlt: 'Anthony Portugal at a café window, looking out at the street',
    availability: 'Open to new projects',
  },
  work: {
    eyebrow: 'Selected work',
    titleBefore: 'Systems built with',
    titleEmphasis: 'care',
    titleAfter: ', shipped to production.',
    featuredEyebrow: 'Featured · Open source',
    sanctuaryDescription:
      'An open-source design system of stone, glass and light: DTCG 2025.10 tokens with four flavors and twelve pigments, every one checked for WCAG AA contrast. Includes a Lit web components library and ports for desktop tools (foot, MangoWM, Waybar). This site is built with it.',
    sanctuaryTags: ['DTCG 2025.10', 'OKLCH', 'Lit Web Components', 'Ports'],
    sanctuaryRepo: 'View on GitHub',
    sanctuaryPlayground: 'Open playground',
    rose: {
      label: 'The twelve Sanctuary pigments arranged as a rose window',
      petalLabel: 'Light the page through {pigment} glass',
      hubLabel: 'Change the hour of the light',
      hint: 'Touch a petal to relight this page; the center changes the hour.',
    },
  },
  openSource: {
    eyebrow: 'Open source',
    titleBefore: 'A workstation as',
    titleEmphasis: 'reproducible',
    titleAfter: 'as the code it builds.',
    description:
      'One repository, one command. Pick a layer and it brings the ones it needs, so a machine can be rebuilt from scratch.',
    source: 'Source',
    requires: 'requires',
    optIn: 'Opt-in',
    hint: 'Hover a layer to light up what it brings with it.',
  },
  experience: {
    eyebrow: 'Experience',
    titleBefore: 'Seven years,',
    titleEmphasis: 'from first commit',
    titleAfter: 'to tech lead.',
    present: 'Present',
    client: 'Client',
  },
  about: {
    eyebrow: 'About',
    titleBefore: 'Frameworks change.',
    titleEmphasis: 'Good boundaries',
    titleAfter: 'last.',
    bio: [
      'I am a software engineer and frontend architect based in Peru with 7+ years across frontend, backend and infrastructure. I have built services in Go, Node and Laravel, interfaces in TypeScript, Vue, React, Svelte, Lit and Flutter, and led a product team through a multiplatform migration.',
      'What I enjoy most is the layer between design and code: Design Systems governance (DTCG, WCAG AA), component libraries, decoupled architectures (Clean Architecture, SOLID) and CI/CD automation. Outside of work I build Sanctuary and keep my Linux workstation reproducible.',
    ],
    principlesTitle: 'Principles',
    principles: [
      {
        title: 'Frameworks are details',
        description:
          'Domain logic sits behind Clean Architecture boundaries, so it outlives the framework of the year.',
      },
      {
        title: 'Tokens are the source of truth',
        description:
          'Core, semantic and component tokens keep design and code in the same language.',
      },
      {
        title: 'Tooling sets the pace',
        description:
          'Reproducible environments and automated pipelines let a team ship without friction.',
      },
    ],
    aiTitle: 'How I work with AI agents',
    aiIntro:
      'Agents write a large share of my code. Engineering is making sure that code deserves to ship.',
    aiPractices: [
      {
        title: 'Spec before prompt',
        description:
          'Every task starts from a written spec that keeps the requirement in its original words, with acceptance criteria and the check that proves them. Agents work from it task by task (Organic Driven Development), not from a chat history.',
      },
      {
        title: 'The author never approves its own work',
        description:
          'Each change is assessed for risk. Risky ones go to independent reviewer agents that only see the frozen diff and leave a receipt of what they checked (receipt-driven development).',
      },
      {
        title: 'Context is engineered, not hoped for',
        description:
          'MCP servers give agents a code graph and current documentation; Engram keeps decisions across sessions, so each session starts from what was decided instead of from zero.',
      },
      {
        title: 'I own what ships',
        description:
          'Agents propose; I verify the result where it runs, sign the commits and decide when to push. Nothing reaches main without my review.',
      },
    ],
    stackTitle: 'Stack',
    stack: [
      {
        group: 'Frontend',
        items:
          'TypeScript, Vue, Nuxt, React, Svelte, Astro, Angular, Lit (Web Components), Flutter (Dart), Tauri',
      },
      {
        group: 'Design systems',
        items: 'Design tokens (DTCG), Storybook, WidgetBook, Figma (tokens), Compound Components',
      },
      { group: 'Backend', items: 'Go, Node (NestJS, Express, AdonisJS), PHP (Laravel)' },
      {
        group: 'Infrastructure',
        items: 'Docker, AWS, Cloudflare, GitLab CI/CD, GitHub Actions, Sentry, Linux',
      },
      { group: 'Data & APIs', items: 'REST, GraphQL, PostgreSQL, MySQL, SQLite' },
      {
        group: 'AI tooling',
        items: 'Claude Code, Antigravity CLI, herdr, gentle-ai, Engram, MCP servers',
      },
    ],
    languagesTitle: 'Languages',
    languages: 'Spanish (native) · English (intermediate, technical reading and writing)',
    educationTitle: 'Education',
    education:
      'Technical degree in Computing and IT, Continental (2018 – 2020), top 10% of the class',
  },
  contact: {
    eyebrow: 'Contact',
    titleBefore: 'Have a project',
    titleEmphasis: 'in mind?',
    description:
      'I am open to new projects. The fastest way to reach me is a message on LinkedIn; my code lives on GitHub.',
    linkedin: 'Message me on LinkedIn',
    github: 'Browse my GitHub',
    location: 'Peru · UTC−5',
  },
  footer: {
    rights: 'Anthony Portugal (Anthony Portugal Robles).',
    builtWith: 'Built with',
    and: 'and',
  },
  language: {
    label: 'Language selection',
  },
};

export type UiStrings = typeof en;

const es: UiStrings = {
  meta: {
    title: 'Anthony Portugal | Ingeniero de Software y Arquitecto Frontend',
    description:
      'Anthony Portugal (Anthony Portugal Robles), ingeniero de software y arquitecto frontend de Perú. Arquitecturas desacopladas (Clean Architecture, SOLID), gobernanza de Design Systems (DTCG, WCAG AA), CI/CD, Linux e ingeniería con agentes de IA. Creador de Sanctuary.',
    jobTitle: 'Ingeniero de Software y Arquitecto Frontend',
    imageAlt:
      'Anthony Portugal, ingeniero de software y arquitecto frontend, mirando por la ventana de una cafetería',
  },
  nav: {
    label: 'Navegación principal',
    work: 'Trabajo',
    openSource: 'Open source',
    experience: 'Experiencia',
    about: 'Sobre mí',
    contact: 'Contacto',
    toggle: 'Abrir o cerrar el menú',
  },
  hero: {
    inscription: 'Ingeniero de software · Arquitecto frontend',
    first: 'Anthony',
    last: 'Portugal',
    statement: 'Diseño sistemas sobre los que los equipos pueden construir.',
    ledeBefore:
      'Ingeniero de software y arquitecto frontend de Perú con más de 7 años en frontend, backend e infraestructura. Lidero equipos técnicos, diseño arquitecturas desacopladas con Clean Architecture y SOLID, gobierno design systems e integro agentes de IA con rigor de ingeniería. Creador de',
    ledeAfter: ', un design system de piedra, vidrio y luz.',
    ctaWork: 'Ver trabajo seleccionado',
    ctaContact: 'Hablemos',
    facts: [
      { value: '7+ años', label: 'en software en producción' },
      { value: 'Tech lead', label: '2024 – 2026 · equipo multiplataforma' },
      { value: '1 base de código', label: '→ Android, iOS, Windows, Linux, macOS' },
    ],
    portraitAlt: 'Anthony Portugal junto a la ventana de una cafetería, mirando la calle',
    availability: 'Abierto a nuevos proyectos',
  },
  work: {
    eyebrow: 'Trabajo seleccionado',
    titleBefore: 'Sistemas construidos con',
    titleEmphasis: 'cuidado',
    titleAfter: ', llevados a producción.',
    featuredEyebrow: 'Destacado · Open source',
    sanctuaryDescription:
      'Un design system open source de piedra, vidrio y luz: tokens DTCG 2025.10 con cuatro flavors y doce pigmentos, todos verificados con contraste WCAG AA. Incluye una librería de Web Components en Lit y ports para herramientas de escritorio (foot, MangoWM, Waybar). Este sitio está construido con él.',
    sanctuaryTags: ['DTCG 2025.10', 'OKLCH', 'Lit Web Components', 'Ports'],
    sanctuaryRepo: 'Ver en GitHub',
    sanctuaryPlayground: 'Abrir playground',
    rose: {
      label: 'Los doce pigmentos de Sanctuary dispuestos como un rosetón',
      petalLabel: 'Iluminar la página a través del vidrio {pigment}',
      hubLabel: 'Cambiar la hora de la luz',
      hint: 'Toca un pétalo para iluminar la página; el centro cambia la hora.',
    },
  },
  openSource: {
    eyebrow: 'Open source',
    titleBefore: 'Una estación de trabajo tan',
    titleEmphasis: 'reproducible',
    titleAfter: 'como el código que construye.',
    description:
      'Un repositorio, un comando. Eliges una capa y trae las que necesita, para poder reconstruir una máquina desde cero.',
    source: 'Código',
    requires: 'requiere',
    optIn: 'Opcionales',
    hint: 'Pasa sobre una capa para iluminar lo que trae consigo.',
  },
  experience: {
    eyebrow: 'Experiencia',
    titleBefore: 'Siete años,',
    titleEmphasis: 'del primer commit',
    titleAfter: 'a tech lead.',
    present: 'Presente',
    client: 'Cliente',
  },
  about: {
    eyebrow: 'Sobre mí',
    titleBefore: 'Los frameworks cambian.',
    titleEmphasis: 'Los buenos límites',
    titleAfter: 'perduran.',
    bio: [
      'Soy ingeniero de software y arquitecto frontend en Perú, con más de 7 años en frontend, backend e infraestructura. He trabajado desde servicios en Go, Node y Laravel hasta interfaces en TypeScript, Vue, React, Svelte, Lit y Flutter, y he liderado un equipo de producto durante una migración multiplataforma.',
      'Lo que más disfruto es la capa entre el diseño y el código: gobernanza de Design Systems (DTCG, WCAG AA), librerías de componentes, arquitecturas desacopladas (Clean Architecture, SOLID) y automatización de CI/CD. Fuera del trabajo construyo Sanctuary y mantengo reproducible mi estación de trabajo Linux.',
    ],
    principlesTitle: 'Principios',
    principles: [
      {
        title: 'Los frameworks son detalles',
        description:
          'La lógica de dominio vive tras los límites de Clean Architecture, así sobrevive al framework de moda.',
      },
      {
        title: 'Los tokens son la fuente de verdad',
        description:
          'Los tokens core, semánticos y de componente hacen que diseño y código hablen el mismo idioma.',
      },
      {
        title: 'Las herramientas marcan el ritmo',
        description:
          'Los entornos reproducibles y los pipelines automatizados permiten entregar sin fricción.',
      },
    ],
    aiTitle: 'Cómo trabajo con agentes de IA',
    aiIntro:
      'Los agentes escriben buena parte de mi código. La ingeniería consiste en asegurar que ese código merece llegar a producción.',
    aiPractices: [
      {
        title: 'Especificación antes que prompt',
        description:
          'Cada tarea parte de una especificación escrita que conserva el requisito con sus palabras originales, con criterios de aceptación y la verificación que los demuestra. Los agentes trabajan sobre ella tarea por tarea (Organic Driven Development), no sobre un historial de chat.',
      },
      {
        title: 'El autor nunca aprueba su propio trabajo',
        description:
          'Cada cambio se evalúa por riesgo. Los riesgosos pasan por agentes revisores independientes que solo ven el diff congelado y dejan un recibo de lo que revisaron (receipt-driven development).',
      },
      {
        title: 'El contexto se diseña, no se espera',
        description:
          'Los servidores MCP dan a los agentes un grafo del código y documentación actualizada; Engram conserva las decisiones entre sesiones, así cada sesión parte de lo decidido y no de cero.',
      },
      {
        title: 'Lo que se publica es mi responsabilidad',
        description:
          'Los agentes proponen; yo verifico el resultado donde se ejecuta, firmo los commits y decido cuándo publicar. Nada llega a main sin mi revisión.',
      },
    ],
    stackTitle: 'Stack',
    stack: [
      {
        group: 'Frontend',
        items:
          'TypeScript, Vue, Nuxt, React, Svelte, Astro, Angular, Lit (Web Components), Flutter (Dart), Tauri',
      },
      {
        group: 'Design systems',
        items: 'Design tokens (DTCG), Storybook, WidgetBook, Figma (tokens), Compound Components',
      },
      { group: 'Backend', items: 'Go, Node (NestJS, Express, AdonisJS), PHP (Laravel)' },
      {
        group: 'Infraestructura',
        items: 'Docker, AWS, Cloudflare, GitLab CI/CD, GitHub Actions, Sentry, Linux',
      },
      { group: 'Datos y APIs', items: 'REST, GraphQL, PostgreSQL, MySQL, SQLite' },
      {
        group: 'Herramientas de IA',
        items: 'Claude Code, Antigravity CLI, herdr, gentle-ai, Engram, servidores MCP',
      },
    ],
    languagesTitle: 'Idiomas',
    languages: 'Español (nativo) · Inglés (intermedio, lectura y escritura técnica)',
    educationTitle: 'Formación',
    education:
      'Profesional Técnico en Computación e Informática, Continental (2018 – 2020), top 10 % de la promoción',
  },
  contact: {
    eyebrow: 'Contacto',
    titleBefore: '¿Tienes un proyecto',
    titleEmphasis: 'en mente?',
    description:
      'Estoy abierto a nuevos proyectos. La forma más rápida de contactarme es un mensaje por LinkedIn; mi código está en GitHub.',
    linkedin: 'Escríbeme por LinkedIn',
    github: 'Ver mi GitHub',
    location: 'Perú · UTC−5',
  },
  footer: {
    rights: 'Anthony Portugal (Anthony Portugal Robles).',
    builtWith: 'Construido con',
    and: 'y',
  },
  language: {
    label: 'Selección de idioma',
  },
};

const strings: Record<Lang, UiStrings> = { en, es };

export function useUi(lang: Lang): UiStrings {
  return strings[lang];
}

/** Home URL of a language: English is served unprefixed. */
export function homeUrl(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

export const links = {
  github: 'https://github.com/anthonyportugal',
  linkedin: 'https://www.linkedin.com/in/bruceeanthonyportugalrobles/',
  sanctuaryRepo: 'https://github.com/sanctuary-ds',
  sanctuaryPlayground: 'https://sanctuary-ds.github.io/playground/',
} as const;
