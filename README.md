# Ether UI

A set of Tailwind-styled React components for composing UIs.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Adding to PurgeCSS](#adding-to-purgecss)

## Prerequisites

- Tailwind must be configured in your project (see [Get Started](https://tailwindcss.com/docs/installation)).

## Installation

```bash
# Using Yarn
yarn add ether-ui

# Using NPM
npm install ether-ui
```

## Usage

Once it's installed (and Tailwind is set up!), you can start using the components right away:

```typescript
import * as React from 'react';
import { Column, Grid, Heading, Text } from 'ether-ui';

const MyComponent: React.FC = () => (
  <Grid columns='12' gap='10'>
    <Column span='7'>
      <Grid gap='3'>
        <Heading level='1' size='5xl' weight='bold'>
          My Component
        </Heading>

        <Text size='lg' leading='loose'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Grid>
    </Column>

    <Column span='5'>
      <Heading level='3' size='2xl'>
        Sidebar
      </Heading>
    </Column>
  </Grid>
);

export default MyComponent;
```

Now you've got it up and running, take a look at how the units are calculated.

## Units

In the previous example, you might assume that the `gap` property on the `<Grid />` element would space its children with `10px` in between, but - because we use Tailwind's spacing - it'd actually be `40px`!

Tailwind by default (see [Customising Spacing](https://tailwindcss.com/docs/customizing-spacing)) uses `4px` increments for its spacing values (e.g. `.m-1` and `.m-3` apply `4px` and `12px` margin, respectively).

## Adding to [PurgeCSS](https://github.com/FullHuman/purgecss)

In your `tailwind.config.js` file, add `./node_modules/ether-ui/**/*.tsx` to your `purge` property, e.g:

```javascript
module.exports = {
  purge: {
    content: [
      './components/**/*.tsx',
      './pages/**/*.tsx',
      './node_modules/ether-ui/**/*.tsx',
    ],
  },
  theme: {},
  variants: {},
  plugins: [],
};
```
