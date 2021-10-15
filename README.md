# Plumage
Plumage is Ducky's design system

## Development

1. Clone this repo
2. Create a `.env` from `.env.template`

### Token generation
We use design-tokens. They are synced from Figma into a JSBin and we use [Style Dictionary](https://amzn.github.io/style-dictionary/) to generate a global CSS file.

To generate them, use
```
npm run tokens
```

### Local development
To run the project locally
```
npm start
```