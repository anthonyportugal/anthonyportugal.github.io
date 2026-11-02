---
title: 'dotfiles'
category: 'Monorepo · Arch Linux'
description: 'My whole Linux environment in one repository: shell, CLI tools, window managers and system settings are layers you choose, all driven by a single command. A fail-closed, three-tier privacy model keeps work identities and secrets out of it.'
technologies: ['Arch Linux', 'GNU Stow', 'Zsh', 'Bash', 'Wayland', 'X11', 'Catppuccin']
githubUrl: 'https://github.com/anthonyportugal/dotfiles'
order: 1
layers:
  - name: 'wm/mangowm'
    tag: 'Wayland'
    summary: 'Waybar, Fuzzel, Swaylock, wlogout'
    requires: ['desktop']
    highlight: 'Featured in the official MangoWM showcase'
    liveUrl: 'https://mangowm.github.io/showcase/'
  - name: 'wm/bspwm'
    tag: 'X11'
    summary: 'Polybar, Rofi, Picom, Dunst'
    requires: ['desktop']
  - name: 'desktop'
    summary: 'Alacritty, Foot, theme engine, GTK preferences'
    requires: ['cli']
  - name: 'cli'
    summary: 'Bat, Micro, Starship, Yazi, Lazygit, Btop, Fastfetch'
    requires: ['core']
  - name: 'core'
    summary: 'Zsh and fail-closed Git'
  - name: 'dev'
    summary: 'Development tools, with Docker and pnpm features'
    requires: ['cli']
    optIn: true
  - name: 'system'
    summary: 'Ly, Limine and DNS-over-TLS. Needs sudo.'
    optIn: true
---
