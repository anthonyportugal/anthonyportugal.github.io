---
title: 'Design system governance for a global education network'
summary: 'Audited a shared Vue/Nuxt UI library and proposed and drove its move to compound components and multi-level design tokens, with predictable releases.'
category: 'Design systems'
role: 'Frontend engineer (SSR)'
organization: 'CSTI · global higher-education client'
period: '2026 – present'
metric:
  value: 'SemVer'
  label: 'predictable releases, isolated Storybook'
metrics:
  - value: '3'
    label: 'token levels: core, semantic, component'
  - value: 'SemVer'
    label: 'staging and pre-release environments'
tags: ['Vue', 'Nuxt', 'TypeScript', 'Design tokens', 'Storybook']
order: 1
---

## The starting point

The shared UI library had grown with the teams that use it, and each new use case was solved by adding props. It was the right moment to move to a more composable model and to give colors in Figma and in code a shared meaning.

## What I did

- **Open composition.** Designed the move to compound components and inversion of control, so teams compose behavior instead of adding props. Public APIs became declarative and typed.
- **Multi-level design tokens.** Proposed and guided the adoption of core, semantic and component tokens to close the gap between Figma and the repository.
- **UI primitives.** Defined the architecture that decouples the base component catalog in Vue/Nuxt, removing redundant components.
- **Release engineering.** Defined the branching strategy, staging and pre-release environments, SemVer and isolated Storybook deployments.
