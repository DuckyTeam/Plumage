# Design tokens for Ducky Plumage

Ducky's design system, Plumage, uses design-tokens.

## Usage

### Install the package using NPM:
```
npm install --save @ducky/plumage-tokens
```

### Themes
Ducky Plumage has 3 themes:
- `default`
- `playful`
- `focused`

The examples below use our `default` theme.
When using our design tokens, replace `default` with another theme if needed.

### Import in CSS
```css
@import "~@ducky/plumage-tokens/dist/css/default.css";
/* Or import from CDN */
@import "https://cdn.jsdelivr.net/npm/@ducky/plumage-tokens/dist/css/default.css";

div {
    color: var(--plmg-color-background-success);
}
``` 

If you're not using a bundling tool like Webpack, you may need to use the full path to `node_modules`
```css
@import "node_modules/@ducky/plumage-tokens/dist/css/default.css";

div {
    color: var(--plmg-color-background-danger);
}
```

### Import in SASS
```scss
@use "~@ducky/plumage-tokens/dist/scss/default" as tokens;

div {
  color: tokens.$plmg-color-background-success;
}
```

### Import in JavaScript as JS, JSON, ES6
In JavaScript, token names are formatted in camelCase.
```js
const tokens = require('@ducky/plumage-tokens/dist/js/default');

console.log(tokens.plmgBackgroundSuccess);
```

In JSON, tokens names are formatted in snake_case.
```js
const tokens = require('@ducky/plumage-tokens/dist/json/default.json');

console.log(tokens["plmg-color-background-success"]);
```

If your project supports ECMAScript Modules, use `import`.
Typing is available for TypeScript users
```js
import * as tokens from '@ducky/plumage-tokens/dist/es6/default';

console.log(tokens.plmgBackgroundSuccess);
```

### Import in HTML
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ducky/plumage-tokens/dist/css/default.css" crossorigin="anonymous" />
```

### Import in LESS
```less
@import "~@ducky/plumage-tokens/dist/less/default";

div {
  color: @plmg-color-background-success;
}
```

## Development

### Token flow

1. Tokens are defined within Figma, using the plugin [Figma Tokens](https://docs.tokens.studio/).
2. Tokens are pushed to this repo, into the file `packages/design-tokens/src/data/design-tokens.json`, on branch `dev`
3. We manually create a PR from `dev` to `main`
4. On PR merge, the design tokens are build, using Style Dictionary
5. The package is published on NPM

### Token build

Tokens are build based on the source file `packages/design-tokens/src/data/design-tokens.json`.
This file is the source of truth for the tokens. It is synced with [Figma Tokens](https://docs.tokens.studio/).

Ducky has 3 themes:
- Default
- Playful
- Focused


We build 1 file per theme. And 1 folder per output format.

Build tokens with
```
npm run build
```