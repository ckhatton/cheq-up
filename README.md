# CheqUp Order Confirmation Steps

This is a build of the CheqUp order confirmation page, from my design of the steps needed to fully complete the order.

Uses:

- [Bun 🍞](https://bun.sh)
  - For JavaScript runtime speed.
- [Vite](https://vite.dev)
  - For a speedy server.
- [Vue](https://vuejs.org)
  - Nuxt was not added, as server-side are not required for the build.
  - Composition API was used, just to prove I can use it. Options API is preferred, as I argue that scripts should not be so large and complex to have to use Composition API - instead they should be broken down into smaller files.
- [Jest](https://jestjs.io)
  - As Vitest does not work with Bun at the time of writing.

## To Install

1. [Clone the Repository](#clone-the-repository)
2. [Install NVM for NPM](#install-nvm-for-npm)
3. [Install Bun and the Project](#install-bun-and-the-project)

### Clone the Repository

In a terminal, change directory to where you would like to clone the repository to, then run `git@github.com:ckhatton/cheq-up.git` to clone the repository, and then run `cd cheq-up` to change directory into "cheq-up".

### Install NVM for NPM

Install NVM (Node Version Manager) by following their [documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

Then install a node version.

```bash
nvm install 20
```

> **Note:**
>
> If the `nvm` command does not work, try a new terminal window. If that still does not fix it, please refer to their [documentation](https://github.com/nvm-sh/nvm#troubleshooting-on-linux) on how to add it to your shell profile.

### Install Bun and the Project

> **Note:**
>
> If these instructions do not work for your OS, please head to the [Bun](https://bun.sh/docs/installation) website for install instructions and then follow it with `bun install`.

Run this command below to install Bun and the project packages.

```bash
npm install -g bun && bun install
```

## To Run

```bash
bun run --bun dev
```

## To Test

```bash
bun run test
```

## To Preview

```bash
bun run --bun preview
```

## To Build and Serve

```bash
bun run vts && bun run --bun build
npm install --global http-server
http-server ./dist -p 80
```
