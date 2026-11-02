---
title: 'dotfiles'
category: 'Monorepo · Arch Linux'
description: 'Todo mi entorno Linux en un solo repositorio: la shell, las herramientas de CLI, los gestores de ventanas y la configuración del sistema son capas a elegir, manejadas con un único comando. Un modelo de privacidad fail-closed de tres niveles mantiene fuera las identidades de trabajo y los secretos.'
technologies: ['Arch Linux', 'GNU Stow', 'Zsh', 'Bash', 'Wayland', 'X11', 'Catppuccin']
githubUrl: 'https://github.com/anthonyportugal/dotfiles'
order: 1
layers:
  - name: 'wm/mangowm'
    tag: 'Wayland'
    summary: 'Waybar, Fuzzel, Swaylock, wlogout'
    requires: ['desktop']
    highlight: 'Destacada en el showcase oficial de MangoWM'
    liveUrl: 'https://mangowm.github.io/showcase/'
  - name: 'wm/bspwm'
    tag: 'X11'
    summary: 'Polybar, Rofi, Picom, Dunst'
    requires: ['desktop']
  - name: 'desktop'
    summary: 'Alacritty, Foot, motor de temas, preferencias de GTK'
    requires: ['cli']
  - name: 'cli'
    summary: 'Bat, Micro, Starship, Yazi, Lazygit, Btop, Fastfetch'
    requires: ['core']
  - name: 'core'
    summary: 'Zsh y Git fail-closed'
  - name: 'dev'
    summary: 'Herramientas de desarrollo, con funciones de Docker y pnpm'
    requires: ['cli']
    optIn: true
  - name: 'system'
    summary: 'Ly, Limine y DNS-over-TLS. Necesita sudo.'
    optIn: true
---
