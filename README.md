# Ether UI

A set of Tailwind-styled React components for composing UIs.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
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

Once it's installed (and Tailwind is set up!), you can start using the [components](#components) right away:

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

## Components

- [All Components](#all-components)
- [Column](#column)
- [Container](#container)
- [Flex](#flex)
- [Grid](#grid)
- [Heading](#heading)
- [Image](#image)
- [List](#list)
- [ListItem](#list-item)
- [Row](#row)
- [Scroll](#scroll)
- [Spacing](#spacing)
- [Text](#text)

### All Components

All components share the following properties:

| Property    | Value                                                                            | Default     |
| ----------- | -------------------------------------------------------------------------------- | ----------- |
| `className` | [React `className` string](https://reactjs.org/docs/dom-elements.html#classname) | `undefined` |
| `style`     | [React `style` object](https://reactjs.org/docs/dom-elements.html#style)         | `undefined` |

### Column

| Property | Value      | Default     |
| -------- | ---------- | ----------- |
| `span`   | `1`...`12` | `undefined` |
| `start`  | `1`...`13` | `undefined` |

```javascript
import { Column } from 'ether-ui';

<Column span='7' start='3'>
  ...
</Column>;
```

### Container

No properties - a wrapper around the Tailwind `.container` class.

```javascript
import { Container } from 'ether-ui';

<Container>...</Container>;
```

### Flex

### Grid

### Heading

| Property   | Value                                                                                                             | Default     |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | ----------- |
| `level`    | `1`<br/>`2`<br/>`3`<br/>`4`<br/>`5`<br/>`6`                                                                       | `1`         |
| `size`     | `xs`<br/>`sm`<br/>`base`<br/>`lg`<br/>`xl`<br/>`2xl`<br/>`3xl`<br/>`4xl`<br/>`5xl`<br/>`6xl`                      | `base`      |
| `weight`   | `hairline`<br/>`thin`<br/>`light`<br/>`normal`<br/>`medium`<br/>`semibold`<br/>`bold`<br/>`extrabold`<br/>`black` | `undefined` |
| `align`    | `left`<br/>`right`<br/>`center`                                                                                   | `undefined` |
| `leading`  | `none`<br/>`tight`<br/>`snug`<br/>`normal`<br/>`relaxed`<br/>`loose`                                              | `undefined` |
| `tracking` | `tighter`<br/>`tight`<br/>`normal`<br/>`wide`<br/>`wider`<br/>`widest`                                            | `undefined` |

```javascript
import { Heading } from 'ether-ui';

<Heading size='3xl' weight='bold' align='center' leading='snug' tracking='wide'>
  ...
</Heading>;
```

### Image

### List

| Property | Value                                                                                                                                         | Default     |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `order`  | `unordered`<br/>`ordered`                                                                                                                     | `unordered` |
| `mode`   | `disc`<br/>`decimal`<br/>`none`                                                                                                               | `none`      |
| `gap`    | `1`<br/>`2`<br/>`3`<br/>`4`<br/>`5`<br/>`6`<br/>`8`<br/>`10`<br/>`12`<br/>`16`<br/>`20`<br/>`24`<br/>`32`<br/>`40`<br/>`48`<br/>`56`<br/>`64` | `undefined` |

```javascript
import { List } from 'ether-ui';

<List order='ordered' mode='decimal' gap='3'>
  ...
</List>;
```

### ListItem

No properties - a wrapper around `<li />`.

```javascript
import { ListItem } from 'ether-ui';

<ListItem>...</ListItem>;
```

### Row

| Property | Value     | Default     |
| -------- | --------- | ----------- |
| `span`   | `1`...`6` | `undefined` |
| `start`  | `1`...`7` | `undefined` |

```javascript
import { Row } from 'ether-ui';

<Row span='3' start='1'>
  ...
</Row>;
```

### Scroll

No properties - an element that fills its parent and enables overflow.

```javascript
import { Scroll } from 'ether-ui';

<Scroll>...</Scroll>;
```

### Spacing

### Text

| Property   | Value                                                                                                             | Default     |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | ----------- |
| `size`     | `xs`<br/>`sm`<br/>`base`<br/>`lg`<br/>`xl`<br/>`2xl`<br/>`3xl`<br/>`4xl`<br/>`5xl`<br/>`6xl`                      | `base`      |
| `weight`   | `hairline`<br/>`thin`<br/>`light`<br/>`normal`<br/>`medium`<br/>`semibold`<br/>`bold`<br/>`extrabold`<br/>`black` | `undefined` |
| `align`    | `left`<br/>`right`<br/>`center`                                                                                   | `undefined` |
| `leading`  | `none`<br/>`tight`<br/>`snug`<br/>`normal`<br/>`relaxed`<br/>`loose`                                              | `undefined` |
| `tracking` | `tighter`<br/>`tight`<br/>`normal`<br/>`wide`<br/>`wider`<br/>`widest`                                            | `undefined` |

```javascript
import { Text } from 'ether-ui';

<Text size='lg' weight='semibold' align='center' leading='snug' tracking='wide'>
  ...
</Text>;
```

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
