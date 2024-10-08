# Minimal Technology eslint configuration

This repository contains the shared ESLint configuration used by the Minimal Technology team. It provides a standardized set of linting rules for your JavaScript and TypeScript projects, helping to ensure code quality and consistency across your projects.

## Installation

First of all, ensure that Node.js and pnpm are installed in your system. Then, run the following command to install the package:

```
pnpm add -D @minimaltech/eslint-{node|next|react|react-native}
```

This command installs this package as a devDependency in your project.

### Setup

This eslint configuration expects some `peerDependencies` or `devDependencies` to be installed in your project. Please ensure that you have them installed as devDependency.
You can install them using the following command:

```bash
pnpm add -D eslint@^8.57.0 prettier typescript
```

## Usage

Create a `eslint.config.*` file in your project's root (or update the existing one) with the following content:

```ts
// Import the configs that required for your project,
// Choose one of [eslint-node, eslint-react, eslint-next | eslint-react-native] to import
import confs from "@minimaltech/eslint-{node|next|react|react-native}";

const configs = [
  ...confs,
  {
    // extra configs
  },
];

export default configs;
```

Lint command:

```bash
eslint --report-unused-disable-directives .
```
