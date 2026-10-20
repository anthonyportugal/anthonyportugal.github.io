---
title: 'Gobernanza de un design system para una red educativa global'
summary: 'Audité una librería de UI compartida en Vue/Nuxt y propuse e impulsé su paso a compound components y design tokens multinivel, con publicaciones predecibles.'
category: 'Design systems'
role: 'Ingeniero frontend (SSR)'
organization: 'CSTI · cliente de educación superior global'
period: '2026 – presente'
metric:
  value: 'SemVer'
  label: 'publicaciones predecibles, Storybook aislado'
metrics:
  - value: '3'
    label: 'niveles de tokens: core, semántico, componente'
  - value: 'SemVer'
    label: 'entornos de staging y pre-release'
tags: ['Vue', 'Nuxt', 'TypeScript', 'Design tokens', 'Storybook']
order: 1
---

## El punto de partida

La librería transversal de UI había crecido junto con los equipos que la usan, y cada nuevo caso de uso se resolvía añadiendo props. Era el momento de pasar a un modelo más componible y de dar a los colores de Figma y del código un significado compartido.

## Qué hice

- **Composición abierta.** Diseñé la transición a compound components e inversión de control, para que los equipos compongan comportamiento en lugar de añadir props. Las APIs públicas pasaron a ser declarativas y tipadas.
- **Design tokens multinivel.** Propuse y guié la adopción de tokens core, semánticos y de componente para cerrar la brecha entre Figma y el repositorio.
- **Primitivas de UI.** Definí la arquitectura que desacopla el catálogo de componentes base en Vue/Nuxt y elimina componentes redundantes.
- **Release engineering.** Definí la estrategia de ramas, los entornos de staging y pre-release, SemVer y los despliegues aislados de Storybook.
