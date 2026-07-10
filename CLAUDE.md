# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A personal website practice project from All Star Code. It is a static site with no build tooling, package manager, or dependencies — just plain HTML, CSS, and JS files opened directly in a browser.

## Files

- `home.html` — the single page, links to `style.css`
- `style.css` — styles for the buttons on the page
- `index.js` — currently empty, present for future JS work
- `README.md` — one-line project description

## Working in this repo

- There is no build, lint, or test command — there's no `package.json` or tooling config of any kind. To view changes, open `home.html` directly in a browser.
- Since there is no bundler, any JS added to `index.js` must be wired up with a `<script>` tag in `home.html` before it will run.
- Keep additions plain (vanilla HTML/CSS/JS) unless the user asks to introduce tooling.
