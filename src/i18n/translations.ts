export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      caseStudies: 'Case Studies',
      openSource: 'Open Source',
      architecture: 'Architecture',
      getInTouch: 'Get in Touch',
    },
    hero: {
      eyebrowRole: 'Senior Software & Systems Architect',
      availableBadge: 'Available for Select Projects',
      headlinePrefix: 'Architecting scalable platforms & systems with',
      headlineHighlight: 'Unix craftsmanship.',
      subheadline:
        'Senior Software Engineer & Systems Architect based in Peru. I partner with engineering teams and startups to build robust design systems, eliminate technical debt through Clean Architecture, and ship resilient web platforms, multiplatform apps, and declarative Linux environments.',
      ctaStart: 'Start a Project',
      ctaCaseStudies: 'Explore Case Studies',
      proofProduction: 'Proven Production Track Record',
      proofCleanArch: 'Clean Architecture & SOLID',
      proofSystems: 'Declarative Systems & CI/CD',
      terminalNameLabel: 'Name',
      terminalRoleLabel: 'Role',
      terminalRoleValue: 'Software Architect & Tech Lead',
      terminalLocationLabel: 'Location',
      terminalLocationValue: 'Lima, Peru (UTC-5)',
      terminalFocusLabel: 'Focus',
      terminalFocusValue: 'Clean Arch · Design Systems · Systems',
      terminalPlatformLabel: 'Platform',
      terminalPlatformValue: 'TypeScript, Flutter, Vue, Lit, Astro',
      terminalSystemsLabel: 'Systems',
      terminalSystemsValue: 'Arch Linux, Docker, CI/CD Pipelines, GNU Stow',
      terminalStatusLabel: 'Status',
      terminalStatusValue: '● Open to Select Projects',
      terminalImpact: 'Impact:',
      terminalImpactValue: ' -30% Technical Debt · +80% Delivery Velocity',
    },
    services: {
      tag: 'Expertise & Services',
      title: 'Architectural solutions for',
      highlight: 'high-growth platforms.',
      description:
        'As an external consultant and technical advisor, I collaborate with engineering teams to resolve critical technical debt, govern design systems, and scale web, multiplatform, and developer tooling ecosystems with measurable architectural impact.',
      deliverablesHeading: 'Deliverables & Outcomes',
      pillars: [
        {
          title: 'Software Architecture & Platform Modernization',
          tagline: 'Architecture & Quality',
          description:
            'Transform complex codebases into modular, maintainable systems. Implementing Clean Architecture, strict TypeScript boundaries, and SOLID design patterns across web and multiplatform applications.',
          deliverables: [
            'Legacy codebase refactoring & tech debt auditing',
            'Clean Architecture & domain boundary decoupling',
            'Strict TypeScript migrations & type-safe contracts',
            'Modern framework transitions (Vue, React, Flutter, Astro)',
          ],
          metric: '-30%',
          metricLabel: 'Technical debt reduction',
        },
        {
          title: 'Design Systems & Component Governance',
          tagline: 'DesignOps & Scale',
          description:
            'Bridge the gap between design and development with centralized token architectures, WCAG-compliant primitives, and comprehensive governance that empowers engineering squads.',
          deliverables: [
            'Design token architectures (Tailwind, SCSS, Figma)',
            'Accessible, WCAG-compliant atomic UI primitives',
            'Component library governance & documentation',
            'Consistent multi-brand & multi-repo design ops',
          ],
          metric: '+40%',
          metricLabel: 'Faster UI feature delivery',
        },
        {
          title: 'Performance Audits & CI/CD Pipelines',
          tagline: 'Automation & DX',
          description:
            'Eliminate release bottlenecks and optimize end-user performance. Deploying automated CI/CD pipelines, containerized environments, and strict Core Web Vitals budgets.',
          deliverables: [
            'Core Web Vitals profiling & bundle optimization',
            'Automated CI/CD pipelines (GitHub Actions, GitLab CI)',
            'Reproducible Docker & Linux development tooling',
            'Automated quality gates (Linting, Typing, Testing)',
          ],
          metric: '+80%',
          metricLabel: 'Faster deployment releases',
        },
      ],
    },
    caseStudies: {
      tag: 'Engineering Case Studies',
      title: 'Production architecture &',
      highlight: 'open-source systems.',
      description:
        'Solving complex enterprise engineering challenges through Clean Architecture and DesignOps, alongside multiplatform systems and declarative Linux environments crafted with Unix precision.',
      sectionHeader: '// Architectural Case Studies & Technical Leadership',
      verifiedPill: 'Measurable production outcomes and verified performance benchmarks.',
      challengeHeading: 'The Architectural Challenge',
      solutionHeading: 'Architectural Solution',
      roiHeading: 'Production ROI & Outcomes',
      roleLabel: 'Role:',
      projects: {
        '01-enterprise-design-system': {
          title: 'Enterprise Design System & Token Governance',
          subtitle:
            'Auditing, modularizing, and establishing multi-level design tokens across distributed engineering squads.',
          category: 'Design Systems',
          clientType: 'Global Higher Education Network',
          role: 'Senior Frontend Consultant',
          summary:
            'Collaborated as an external consulting specialist to audit a cross-cutting UI library, guiding the transition toward open composition (Compound Components) and multi-level design tokens.',
          metrics: [
            { value: '+40%', label: 'UI feature velocity' },
            { value: '100%', label: 'SemVer & token parity' },
            { value: '0', label: 'Breaking UI regressions' },
          ],
          bullets: [
            'Compound Components & Inversion of Control: Advocated for and guided the refactoring of rigid component APIs toward composable compound patterns, eliminating brittle conditional props.',
            'Multi-Level Semantic Design Tokens: Collaborated with UI/UX designers to bridge the gap between Figma variables and code, establishing a clear hierarchy (core, semantic, component).',
            'Isolated Component Catalog: Supported the team in deploying isolated Storybook environments with SemVer versioning and automated visual testing to safeguard component consumers.',
            'Strict TypeScript Contracts: Authored comprehensive type definitions for public component APIs to ensure type safety during integration across squads.',
          ],
        },
        '02-clean-architecture-modernization': {
          title: 'Clean Architecture & Technical Debt Remediation',
          subtitle:
            'Restructuring complex SaaS modules into decoupled, domain-driven layers with high testability.',
          category: 'Architecture',
          clientType: 'SaaS Collaboration & EdTech Platform',
          role: 'Tech Lead & Frontend Architect',
          summary:
            'Spearheaded the architectural refactoring of high-complexity modules including a file management system, dynamic form engines, and granular RBAC authorization, enforcing Clean Architecture and queue-based concurrency.',
          metrics: [
            { value: '-30%', label: 'Technical debt reduction' },
            { value: '80%', label: 'Crash-free sessions' },
            { value: '<2s', label: 'Core workflow load times' },
          ],
          bullets: [
            'Domain Boundary Isolation: Decoupled core business rules from UI components by introducing explicit Use Case services and Repository interfaces, reducing side-effects.',
            'Asynchronous Queue Concurrency: Replaced naive sequential file operations with a resilient batch worker handling retries, pausing, and chunked uploads.',
            'Dynamic Form Engine: Designed a declarative, JSON-driven dynamic form schema engine with runtime Zod validation, replacing hundreds of brittle hardcoded template inputs.',
            'Strict Role-Based Access Control (RBAC): Implemented centralized permission evaluation directives and navigation guards to guarantee multi-tenant security.',
          ],
        },
        '03-cicd-automation-tooling': {
          title: 'CI/CD Pipeline Automation & Build Optimization',
          subtitle:
            'Transforming release cycles through automated delivery pipelines and modern build orchestration.',
          category: 'Performance & CI/CD',
          clientType: 'Enterprise Software Infrastructure',
          role: 'Tech Lead & Systems Engineer',
          summary:
            'Automated end-to-end CI/CD release pipelines with GitLab CI, migrated legacy bundlers to Vite, and deployed containerized testing environments to eliminate deployment friction and drastically increase delivery velocity.',
          metrics: [
            { value: '+80%', label: 'Faster release velocity' },
            { value: '-80%', label: 'Manual deployment errors' },
            { value: '50%', label: 'Faster build execution' },
          ],
          bullets: [
            'Multi-Stage CI/CD Automation: Engineered deterministic pipelines automating linting, type-checking, headless browser testing, and container deployment.',
            'Modern Build Tooling Migration: Replaced legacy Webpack configurations with modern Vite build orchestration, cutting local cold start and production build times by half.',
            'Dockerized Staging Environments: Standardized isolated container environments matching production topologies, eliminating "works on my machine" inconsistencies.',
            'Automated Quality Gates: Configured branch protection rules requiring passing unit test suites and zero linter warnings prior to staging merges.',
          ],
        },
      },
    },
    openSource: {
      tag: '// Author & Systems Tooling',
      title: 'Personal Unix Tooling & Open-Source Workstations',
      description:
        'My publicly maintained dotfiles, Wayland workstations, and Linux system configurations. Engineered to maximize developer velocity, eliminate cognitive overhead, and showcase production-grade Unix craftsmanship.',
      viewAll: 'View All Repositories',
      sourceCode: 'Source Code',
      officialFeature: 'Official Feature',
      officialMangoDocs: 'Official MangoWM Showcase',
      liveShowcase: 'Live Showcase',
      archLinux: 'Arch Linux',
      repos: {
        '01-dotfiles': {
          title: 'dotfiles',
          category: 'Base Ecosystem',
          tagline: 'Autonomous, modular, and declarative base dotfiles for Arch Linux',
          description:
            'A reproducible user-space configuration suite orchestrating shells, terminal emulators, development tools, and system utilities through GNU Stow, POSIX scripts, and interactive CLI tooling.',
        },
        '02-dotfiles-mangowm': {
          title: 'dotfiles-mangowm',
          category: 'Wayland Session',
          tagline: 'Officially accepted & featured on upstream MangoWM showcase',
          description:
            'A lightweight Wayland desktop suite officially accepted and featured in the upstream MangoWM showcase. Features custom Waybar metrics, Catppuccin Mocha theming, and dynamic tiling ergonomics.',
          liveUrlLabel: 'Official MangoWM Showcase',
        },
        '03-dotfiles-bspwm': {
          title: 'dotfiles-bspwm',
          category: 'X11 Session',
          tagline: 'Minimal, ergonomic binary space partitioning desktop session for X11',
          description:
            'A battle-tested X11 environment orchestrating BSPWM, sxhkd, and Polybar. Implements modular hotkey bindings, multi-monitor workspace rules, and unified Catppuccin theming.',
        },
        '04-dotfiles-system': {
          title: 'dotfiles-system',
          category: 'System Theming',
          tagline: 'Non-destructive, reproducible system-level configurations for Arch Linux',
          description:
            'System-level configurations governing display management (Ly console display manager) and modern bootloader aesthetics (Limine), packaged with non-destructive automation scripts.',
        },
      },
    },
    philosophy: {
      tag: 'Engineering Mindset & Track Record',
      title: 'Architectural principles honed in',
      highlight: 'high-stakes production.',
      description:
        'How I approach software engineering: treating frameworks as details, enforcing typed contracts, and building for long-term maintainability.',
      principlesTitle: 'Core Engineering Principles',
      timelineTitle: 'Leadership & Career Milestones',
      principles: [
        {
          title: 'Frameworks Are Implementation Details',
          tag: 'Clean Architecture',
          description:
            'UI and application frameworks (Vue, React, Flutter) come and go. Investing in framework-agnostic standards like Web Components (Lit) and Clean Architecture boundaries ensures that core domain logic and primitives outlive any single framework ecosystem.',
        },
        {
          title: 'Design Tokens as Single Source of Truth',
          tag: 'DesignOps',
          description:
            'Bridging design and engineering requires multi-level semantic tokens (Core, Semantic, Component). By establishing strict token governance and compound primitives, UI consistency is mathematically preserved across products.',
        },
        {
          title: 'Unix Craftsmanship & Developer Tooling',
          tag: 'Systems & DX',
          description:
            'An engineering team’s delivery velocity is bound by its developer tooling. Declarative configurations (GNU Stow, Linux), reproducible containers, and automated CI/CD quality gates empower teams to ship with zero cognitive fatigue.',
        },
        {
          title: 'Resource-Conscious Engineering & Performance',
          tag: 'Efficiency & UX',
          description:
            'Performance is driven by discipline and resource efficiency: strict Core Web Vitals budgets, low memory footprints, sub-2s load guarantees, and asynchronous queue concurrency to prevent main-thread saturation across web and multiplatform.',
        },
      ],
      timeline: [
        {
          role: 'Senior Frontend Consultant',
          company: 'CSTI',
          client: 'Client: Laureate',
          period: '2026 – Present',
          description:
            'Collaborating as an external frontend specialist supporting enterprise engineering teams in elevating UI code quality, adopting compound component patterns, and establishing design token alignment.',
          highlights: [
            'Guiding UI library refactoring toward Compound Components and open composition',
            'Assisting teams in synchronizing multi-level design tokens between Figma and code',
            'Supporting package release standards, SemVer versioning, and Storybook documentation',
          ],
        },
        {
          role: 'Tech Lead & Software Project Manager',
          company: 'FractalUp',
          period: '2024 – 2026',
          description:
            'Directed an engineering squad of ~7 developers, driving architectural standards, technical onboarding, and platform scalability.',
          highlights: [
            'Engineered cross-platform Flutter architecture across Android, iOS, Windows, macOS, and Linux',
            'Architected Google Drive-style file system with queue-based concurrency',
            'Enforced Clean Architecture & SOLID (-30% tech debt) and automated GitLab CI/CD (-80% manual deploys)',
          ],
        },
        {
          role: 'Full Stack Software Engineer',
          company: 'FractalUp',
          period: '2021 – 2024',
          description:
            'Built core product modules and refactored high-concurrency interfaces for enterprise scale.',
          highlights: [
            'Migrated build tooling to modern Vite, cutting build times by 50%',
            'Engineered dynamic form and rubric engines with TypeScript type safety',
            'Maintained 80% crash-free sessions and <2s latency under concurrent loads',
          ],
        },
        {
          role: 'Systems & Frontend Intern',
          company: 'Virtualink Technologies',
          period: '2019 – 2021',
          description:
            'Gained deep foundational experience in web fundamentals, systems stability, and responsive rendering.',
          highlights: [
            'Optimized asset delivery and rendering pipelines for legacy client platforms',
            'Executed responsive UI component layouts ensuring cross-browser parity',
          ],
        },
      ],
    },
    contact: {
      tag: 'Initiate Contact',
      title: "Let's engineer something",
      highlight: 'resilient together.',
      description:
        'Available for select freelance contracts, frontend architecture audits, design systems governance, and senior technical consulting.',
      linkedinBadge: 'Primary Channel',
      linkedinTitle: 'Direct Inquiry on LinkedIn',
      linkedinDesc:
        'For architectural consulting, design systems advisory, contract engagements, or technical leadership discussions with direct communication.',
      linkedinPoint1: 'Direct communication & professional profile',
      linkedinPoint2: 'Typical response time: < 24 hours',
      linkedinCta: 'Connect on LinkedIn',
      githubBadge: 'Code & Systems',
      githubTitle: 'Inspect Source Repositories',
      githubDesc:
        'Explore production-tested code, multiplatform architectures, Unix workstation configurations, and systems tooling.',
      githubPoint1: 'Arch Linux workstation suite with GNU Stow & MangoWM',
      githubPoint2: 'Structured Git history and modular architecture',
      githubCta: 'Explore GitHub Repositories',
      availBadge: 'Available for Select Projects',
      availPeriod: 'Q1–Q2 2026',
      availTitle: 'Open for Architecture Advisory, Design Systems & Multiplatform Consulting',
      availDesc:
        'Tailored engagements for engineering teams scaling web platforms, multiplatform apps, and developer tooling.',
      locLima: 'Lima, Peru (PET · UTC-5)',
      locRemote: 'Remote Worldwide',
      locResponse: 'Response < 24h',
    },
    footer: {
      tagline: 'Software architecture, multiplatform engineering, and Unix systems craftsmanship.',
      rights: 'Anthony Portugal. All rights reserved.',
      builtWith:
        'Built with <span class="text-ctp-mauve">Astro</span>, <span class="text-ctp-sky">Tailwind CSS</span> and <span class="text-ctp-peach">Catppuccin Mocha</span>',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      caseStudies: 'Casos de Estudio',
      openSource: 'Código Abierto',
      architecture: 'Arquitectura',
      getInTouch: 'Iniciar Contacto',
    },
    hero: {
      eyebrowRole: 'Arquitecto de Software y Sistemas',
      availableBadge: 'Disponible para Proyectos Selectos',
      headlinePrefix: 'Construyendo software y sistemas escalables con',
      headlineHighlight: 'artesanía Unix.',
      subheadline:
        'Ingeniero de Software Senior y Arquitecto en Perú. Colaboro con equipos de ingeniería y startups para construir sistemas de diseño robustos, eliminar deuda técnica mediante Clean Architecture y crear plataformas web resilientes, aplicaciones multiplataforma y entornos declarativos en Linux.',
      ctaStart: 'Iniciar Proyecto',
      ctaCaseStudies: 'Explorar Casos de Estudio',
      proofProduction: 'Trayectoria Comprobada en Producción',
      proofCleanArch: 'Clean Architecture y SOLID',
      proofSystems: 'Sistemas Declarativos y CI/CD',
      terminalNameLabel: 'Nombre',
      terminalRoleLabel: 'Rol',
      terminalRoleValue: 'Arquitecto de Software y Tech Lead',
      terminalLocationLabel: 'Ubicación',
      terminalLocationValue: 'Lima, Perú (UTC-5)',
      terminalFocusLabel: 'Especialidad',
      terminalFocusValue: 'Clean Arch · Design Systems · Sistemas',
      terminalPlatformLabel: 'Plataforma',
      terminalPlatformValue: 'TypeScript, Flutter, Vue, Lit, Astro',
      terminalSystemsLabel: 'Sistemas',
      terminalSystemsValue: 'Arch Linux, Docker, Pipelines CI/CD, GNU Stow',
      terminalStatusLabel: 'Estado',
      terminalStatusValue: '● Abierto a Proyectos Selectos',
      terminalImpact: 'Impacto:',
      terminalImpactValue: ' -30% Deuda Técnica · +80% Velocidad de Entrega',
    },
    services: {
      tag: 'Especialidad y Servicios',
      title: 'Soluciones de arquitectura para',
      highlight: 'plataformas en crecimiento.',
      description:
        'Como consultor externo y asesor técnico, colaboro con equipos de ingeniería para resolver deuda técnica crítica, gobernar sistemas de diseño y escalar ecosistemas web, multiplataforma y herramientas de desarrollo con un impacto arquitectónico medible.',
      deliverablesHeading: 'Entregables y Resultados',
      pillars: [
        {
          title: 'Arquitectura de Software y Modernización',
          tagline: 'Arquitectura y Calidad',
          description:
            'Transformación de sistemas complejos en arquitecturas modulares y mantenibles. Implementación de Clean Architecture, contratos estrictos en TypeScript y patrones SOLID para plataformas web y aplicaciones multiplataforma.',
          deliverables: [
            'Refactorización de código legacy y auditoría de deuda técnica',
            'Clean Architecture y desacoplamiento de capas de dominio',
            'Migración a TypeScript estricto y contratos tipados',
            'Transición hacia tecnologías modernas (Vue, React, Flutter, Astro)',
          ],
          metric: '-30%',
          metricLabel: 'Reducción de deuda técnica',
        },
        {
          title: 'Sistemas de Diseño y Gobernanza de Componentes',
          tagline: 'DesignOps y Escala',
          description:
            'Cierra la brecha entre diseño y desarrollo con arquitecturas de tokens centralizadas, primitivas accesibles bajo WCAG y gobernanza integral que potencia a los equipos de ingeniería.',
          deliverables: [
            'Arquitectura de tokens de diseño (Tailwind, SCSS, Figma)',
            'Primitivas UI atómicas accesibles y conformes a WCAG',
            'Gobernanza de librerías de componentes y documentación',
            'DesignOps consistente para múltiples marcas y repositorios',
          ],
          metric: '+40%',
          metricLabel: 'Aceleración en entrega de UI',
        },
        {
          title: 'Auditorías de Rendimiento y Pipelines CI/CD',
          tagline: 'Automatización y DX',
          description:
            'Elimina cuellos de botella en despliegues y optimiza el rendimiento del usuario final. Despliegue de pipelines CI/CD automatizados, entornos contenerizados y presupuestos estrictos de Core Web Vitals.',
          deliverables: [
            'Perfilado de Core Web Vitals y optimización de bundles',
            'Pipelines CI/CD automatizados (GitHub Actions, GitLab CI)',
            'Entornos de desarrollo reproducibles con Docker y Linux',
            'Quality gates automáticos (Linting, Tipado estricto, Pruebas)',
          ],
          metric: '+80%',
          metricLabel: 'Despliegues más ágiles y confiables',
        },
      ],
    },
    caseStudies: {
      tag: 'Casos de Estudio de Ingeniería',
      title: 'Arquitectura en producción y',
      highlight: 'sistemas de código abierto.',
      description:
        'Resolviendo desafíos complejos de ingeniería empresarial mediante Clean Architecture y DesignOps, junto a sistemas multiplataforma y entornos declarativos de Linux construidos con precisión Unix.',
      sectionHeader: '// Casos de Estudio de Arquitectura y Liderazgo Técnico',
      verifiedPill: 'Resultados medibles y verificados en entornos de producción.',
      challengeHeading: 'El Desafío de Arquitectura',
      solutionHeading: 'Solución Arquitectónica',
      roiHeading: 'ROI y Resultados en Producción',
      roleLabel: 'Rol:',
      projects: {
        '01-enterprise-design-system': {
          title: 'Sistema de Diseño Empresarial y Gobernanza de Tokens',
          subtitle:
            'Auditoría, modularización y establecimiento de tokens de diseño multinivel en equipos de ingeniería distribuidos.',
          category: 'Sistemas de Diseño',
          clientType: 'Red Global de Educación Superior',
          role: 'Consultor Frontend Senior',
          summary:
            'Colaboración como especialista externo para auditar la librería transversal de UI, guiando la transición hacia composición abierta (Componentes Compuestos) y tokens multinivel.',
          metrics: [
            { value: '+40%', label: 'Velocidad de entrega de UI' },
            { value: '100%', label: 'Paridad de SemVer y tokens' },
            { value: '0', label: 'Regresiones visuales' },
          ],
          bullets: [
            'Componentes Compuestos e Inversión de Control: Guié la refactorización de APIs rígidas hacia patrones compuestos desacoplados, eliminando props condicionales frágiles.',
            'Tokens de Diseño Semánticos Multinivel: Colaboración con diseñadores UI/UX para unir Figma y código, definiendo una jerarquía clara (core, semántica, componente).',
            'Catálogo Aislado de Componentes: Apoyo en el despliegue de Storybook con versionado SemVer y pruebas visuales automatizadas para proteger a los consumidores de UI.',
            'Contratos Estrictos en TypeScript: Definición de tipos exhaustivos para las APIs públicas de componentes para garantizar total seguridad en la integración entre squads.',
          ],
        },
        '02-clean-architecture-modernization': {
          title: 'Clean Architecture y Remediación de Deuda Técnica',
          subtitle:
            'Reestructuración de módulos SaaS complejos en capas desacopladas guiadas por el dominio con alta testeabilidad.',
          category: 'Arquitectura',
          clientType: 'Plataforma SaaS de Colaboración y EdTech',
          role: 'Tech Lead y Arquitecto Frontend',
          summary:
            'Lideré la refactorización arquitectónica de módulos críticos incluyendo gestor de archivos, motores de formularios dinámicos y autorización granular RBAC, aplicando Clean Architecture y colas asíncronas.',
          metrics: [
            { value: '-30%', label: 'Reducción de deuda técnica' },
            { value: '80%', label: 'Sesiones libres de fallos' },
            { value: '<2s', label: 'Tiempos de carga de flujos clave' },
          ],
          bullets: [
            'Aislamiento de Capas de Dominio: Desacople de reglas de negocio respecto a componentes UI mediante Casos de Uso e interfaces de Repositorios, reduciendo efectos secundarios.',
            'Concurrencia Asíncrona con Colas: Reemplazo de operaciones secuenciales por un worker de colas resiliente con reintentos automáticos, pausas y subidas por chunks.',
            'Motor de Formularios Dinámicos: Diseño de un motor declarativo basado en esquemas JSON con validación en tiempo de ejecución con Zod, reemplazando plantillas cableadas.',
            'Control de Acceso Basado en Roles (RBAC): Implementación de directivas centralizadas de permisos y guardas de navegación para garantizar seguridad multi-inquilino.',
          ],
        },
        '03-cicd-automation-tooling': {
          title: 'Automatización de Pipelines CI/CD y Optimización de Builds',
          subtitle:
            'Transformación del ciclo de publicación mediante pipelines de entrega automatizada y orquestación moderna de builds.',
          category: 'Rendimiento y CI/CD',
          clientType: 'Infraestructura de Software Empresarial',
          role: 'Tech Lead e Ingeniero de Sistemas',
          summary:
            'Automatización de pipelines CI/CD de extremo a extremo con GitLab CI, migración de empaquetadores legacy a Vite y despliegue de entornos contenerizados para multiplicar la velocidad de entrega.',
          metrics: [
            { value: '+80%', label: 'Mayor velocidad de despliegues' },
            { value: '-80%', label: 'Menor margen de error manual' },
            { value: '50%', label: 'Compilaciones más veloces' },
          ],
          bullets: [
            'Automatización CI/CD Multi-Etapa: Construcción de pipelines deterministas que ejecutan linting, tipado estricto, pruebas en navegadores headless y despliegue de contenedores.',
            'Migración a Herramientas Modernas de Build: Reemplazo de Webpack legacy por Vite, reduciendo a la mitad los tiempos de inicio local y compilación de producción.',
            'Entornos Staging Contenerizados: Estandarización de entornos Docker idénticos a producción, eliminando inconsistencias del tipo "en mi máquina funciona".',
            'Quality Gates Automatizados: Configuración de políticas de protección de ramas que exigen suites de pruebas unitarias aprobadas y cero advertencias antes de merges.',
          ],
        },
      },
    },
    openSource: {
      tag: '// Autor y Herramientas de Sistema',
      title: 'Herramientas Unix Personales y Workstations de Código Abierto',
      description:
        'Mis dotfiles, estaciones de trabajo Wayland y configuraciones de sistema en Linux de acceso público, diseñados para optimizar el flujo de desarrollo, reducir la fricción diaria y demostrar artesanía en sistemas Unix.',
      viewAll: 'Ver Todos los Repositorios',
      sourceCode: 'Código Fuente',
      officialFeature: 'Destacado Oficial',
      officialMangoDocs: 'Showcase Oficial de MangoWM',
      liveShowcase: 'Demostración en Vivo',
      archLinux: 'Arch Linux',
      repos: {
        '01-dotfiles': {
          title: 'dotfiles',
          category: 'Ecosistema Base',
          tagline: 'Dotfiles base autónomos, modulares y declarativos para Arch Linux',
          description:
            'Suite reproducible de configuración de espacio de usuario que gestiona shells, emuladores de terminal, herramientas de desarrollo y utilidades del sistema mediante GNU Stow, scripts POSIX y CLI interactivo.',
        },
        '02-dotfiles-mangowm': {
          title: 'dotfiles-mangowm',
          category: 'Sesión Wayland',
          tagline:
            'Suite de compositor Wayland aceptada y destacada oficialmente en el showcase de MangoWM',
          description:
            'Entorno de escritorio Wayland ultraligero aceptado y presentado oficialmente en el showcase de upstream de MangoWM. Cuenta con métricas personalizadas en Waybar, paleta Catppuccin Mocha y ergonomía de mosaico dinámico.',
          liveUrlLabel: 'Showcase Oficial de MangoWM',
        },
        '03-dotfiles-bspwm': {
          title: 'dotfiles-bspwm',
          category: 'Sesión X11',
          tagline: 'Sesión de escritorio minimalista y ergonómica basada en BSPWM para X11',
          description:
            'Entorno de alta estabilidad para X11 que orquesta BSPWM, sxhkd y Polybar. Implementa atajos modulares de teclado, reglas multi-monitor para espacios de trabajo y paleta unificada Catppuccin.',
        },
        '04-dotfiles-system': {
          title: 'dotfiles-system',
          category: 'Personalización de Sistema',
          tagline: 'Configuraciones de sistema no destructivas y reproducibles para Arch Linux',
          description:
            'Configuraciones a nivel de sistema que gestionan el display manager (Ly en consola) y la estética del bootloader moderno (Limine), empaquetadas con scripts automatizados y seguros.',
        },
      },
    },
    philosophy: {
      tag: 'Mentalidad de Ingeniería y Trayectoria',
      title: 'Principios de arquitectura forjados en',
      highlight: 'producción de alta exigencia.',
      description:
        'Mi enfoque de ingeniería de software: tratar a los frameworks como detalles de implementación, garantizar contratos tipados y diseñar para la mantenibilidad a largo plazo.',
      principlesTitle: 'Principios Fundamentales de Ingeniería',
      timelineTitle: 'Hitos de Carrera y Liderazgo Técnico',
      principles: [
        {
          title: 'Los Frameworks Son Detalles de Implementación',
          tag: 'Clean Architecture',
          description:
            'Los frameworks de UI y aplicaciones (Vue, React, Flutter) van y vienen. Invertir en estándares agnósticos como Web Components (Lit) y límites de Clean Architecture garantiza que la lógica de negocio y las primitivas de interfaz trasciendan cualquier ecosistema particular.',
        },
        {
          title: 'Design Tokens como Única Fuente de la Verdad',
          tag: 'DesignOps',
          description:
            'Unir diseño e ingeniería requiere tokens semánticos multinivel (Core, Semánticos, Componente). Con gobernanza estricta de tokens y componentes compuestos, la consistencia visual se preserva matemáticamente entre productos.',
        },
        {
          title: 'Artesanía Unix y Herramientas para Desarrolladores',
          tag: 'Sistemas y DX',
          description:
            'La velocidad de entrega de un equipo está delimitada por sus herramientas de desarrollo. Configuraciones declarativas (GNU Stow, Linux), contenedores reproducibles y quality gates en CI/CD permiten desplegar sin fatiga cognitiva.',
        },
        {
          title: 'Ingeniería Consciente del Consumo de Recursos y Rendimiento',
          tag: 'Eficiencia y UX',
          description:
            'El rendimiento surge de la disciplina y el consumo eficiente de recursos: presupuestos de Core Web Vitals, bajo consumo de memoria, cargas sub-2s y concurrencia asíncrona para no saturar el main-thread en web y multiplataforma.',
        },
      ],
      timeline: [
        {
          role: 'Consultor Frontend Senior',
          company: 'CSTI',
          client: 'Cliente: Laureate',
          period: '2026 – Presente',
          description:
            'Colaborando como especialista frontend externo asesorando a equipos empresariales para elevar la calidad del código UI, adoptar patrones de componentes compuestos y alinear tokens de diseño.',
          highlights: [
            'Guié la refactorización de librerías UI hacia Componentes Compuestos y composición abierta',
            'Apoyo a equipos en la sincronización de tokens de diseño multinivel entre Figma y código',
            'Estandarización de lanzamientos de paquetes, versionado SemVer y documentación en Storybook',
          ],
        },
        {
          role: 'Tech Lead y Software Project Manager',
          company: 'FractalUp',
          period: '2024 – 2026',
          description:
            'Dirigí un squad de ingeniería de ~7 desarrolladores, impulsando estándares de arquitectura, onboarding técnico y escalabilidad de la plataforma.',
          highlights: [
            'Diseñé la arquitectura multiplataforma en Flutter para Android, iOS, Windows, macOS y Linux',
            'Arquitecté un sistema de archivos tipo Google Drive con concurrencia basada en colas',
            'Apliqué Clean Architecture y SOLID (-30% deuda técnica) y automaticé GitLab CI/CD (-80% despliegues manuales)',
          ],
        },
        {
          role: 'Ingeniero de Software Full Stack',
          company: 'FractalUp',
          period: '2021 – 2024',
          description:
            'Construí módulos centrales de producto y refactoricé interfaces de alta concurrencia para escala empresarial.',
          highlights: [
            'Migré el tooling de build a Vite moderno, reduciendo los tiempos de compilación en un 50%',
            'Diseñé motores de formularios y rúbricas dinámicas con seguridad de tipos en TypeScript',
            'Mantuve un 80% de sesiones libres de caídas y latencias <2s bajo cargas concurrentes',
          ],
        },
        {
          role: 'Pasante de Sistemas y Frontend',
          company: 'Virtualink Technologies',
          period: '2019 – 2021',
          description:
            'Adquirí sólida experiencia en fundamentos web, estabilidad de sistemas y renderizado responsivo.',
          highlights: [
            'Optimicé la entrega de recursos y pipelines de renderizado para plataformas cliente legacy',
            'Maqueté componentes UI responsivos garantizando paridad entre diferentes navegadores',
          ],
        },
      ],
    },
    contact: {
      tag: 'Iniciar Contacto',
      title: 'Construyamos algo',
      highlight: 'resiliente juntos.',
      description:
        'Disponible para contratos freelance selectos, auditorías de arquitectura frontend, gobernanza de sistemas de diseño y consultoría técnica senior.',
      linkedinBadge: 'Canal Principal',
      linkedinTitle: 'Contacto Directo en LinkedIn',
      linkedinDesc:
        'Para consultoría de arquitectura, asesoría en sistemas de diseño, contratos por proyecto o diálogo técnico con comunicación directa y profesional.',
      linkedinPoint1: 'Comunicación directa y perfil profesional',
      linkedinPoint2: 'Tiempo de respuesta habitual: < 24 horas',
      linkedinCta: 'Conectar en LinkedIn',
      githubBadge: 'Código y Sistemas',
      githubTitle: 'Explorar Repositorios en GitHub',
      githubDesc:
        'Explora código probado en producción, arquitecturas multiplataforma, configuraciones de estaciones de trabajo Unix y herramientas de sistema.',
      githubPoint1: 'Suite para estación de trabajo en Arch Linux con GNU Stow y MangoWM',
      githubPoint2: 'Historial de Git estructurado y arquitectura modular',
      githubCta: 'Explorar Repositorios en GitHub',
      availBadge: 'Disponible para Proyectos Selectos',
      availPeriod: 'Q1–Q2 2026',
      availTitle:
        'Disponible para Asesoría de Arquitectura, Sistemas de Diseño y Consultoría Multiplataforma',
      availDesc:
        'Colaboraciones estratégicas para equipos que escalan plataformas web, aplicaciones multiplataforma y herramientas de desarrollo.',
      locLima: 'Lima, Perú (PET · UTC-5)',
      locRemote: 'Remoto Mundial',
      locResponse: 'Respuesta < 24h',
    },
    footer: {
      tagline: 'Arquitectura de software, ingeniería multiplataforma y artesanía en sistemas Unix.',
      rights: 'Anthony Portugal. Todos los derechos reservados.',
      builtWith:
        'Construido con <span class="text-ctp-mauve">Astro</span>, <span class="text-ctp-sky">Tailwind CSS</span> y <span class="text-ctp-peach">Catppuccin Mocha</span>',
    },
  },
} as const;

export function useTranslations(lang: Lang = defaultLang) {
  return translations[lang] || translations[defaultLang];
}
