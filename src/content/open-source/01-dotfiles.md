---
title: 'dotfiles'
category: 'Base Ecosystem'
tagline: 'Autonomous, modular, and declarative base dotfiles for Arch Linux'
description: 'A reproducible user-space configuration suite orchestrating shells, terminal emulators, development tools, and system utilities through GNU Stow, POSIX scripts, and interactive CLI tooling.'
technologies:
  - 'Arch Linux'
  - 'GNU Stow'
  - 'Bash / POSIX'
  - 'FZF'
  - 'Git'
githubUrl: 'https://github.com/anthonyportugal/dotfiles'
order: 1
featured: true
accentColor: 'mauve'
---

### Architecture & Philosophy

Designed with declarative modularity at its core. Every user-space application configuration is isolated into atomic Stow packages, allowing individual modules to be symlinked or unlinked deterministically without polluting the root filesystem. Features an interactive CLI orchestrator powered by FZF for rapid bootstrapping and environment health checks.
