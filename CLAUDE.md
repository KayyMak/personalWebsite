# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A personal website practice project from All Star Code. It is a static site with no build tooling, package manager, or dependencies — just plain HTML, CSS, and JS files opened directly in a browser.

## Files

- `index.html` — semantic HTML skeleton: loading screen div, click-to-continue screen div, and a `<main>` with empty `#about`/`#projects` sections. Links all CSS/JS files.
- `css/reset.css` — minimal CSS reset.
- `css/variables.css` — empty `:root {}` block for future custom properties.
- `css/main.css` — imports the reset, plus layout comment headers for the About/Projects sections.
- `css/intro.css` — comment header only, for future loading/click-to-continue styles.
- `js/intro.js` — comment header only; TODO for a loading/ready/main state machine.
- `js/main.js` — comment header only.
- `README.md` — local preview and GitHub Pages deploy instructions.
- `.gitignore` — common OS/editor junk.

## Working in this repo

- There is no build, lint, or test command — there's no `package.json` or tooling config of any kind. To view changes, open `index.html` directly in a browser.
- Since there is no bundler, any JS added to `js/*.js` must be wired up with a `<script>` tag in `index.html` before it will run.
- Keep additions plain (vanilla HTML/CSS/JS) unless the user asks to introduce tooling.
