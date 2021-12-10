const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: `remove-extraneous-keys`,
  type: `name`,
  transformer: function (token) {
    return token.name.replace('values-plumage-', '');
  }
})

module.exports = {
  source: ['./src/tokens/design-tokens.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: './src/tokens/dist/',
      transforms: ['name/cti/kebab', 'remove-extraneous-keys'],
      /* We split tokens into separate files - it will be easier to use them this way */
      files: [
        {
          destination: 'other.scss',
          format: 'scss/variables',
          filter: {
            type: 'other',
          },
        },
        {
          destination: 'spacing.scss',
          format: 'scss/variables',
          filter: {
            type: 'spacing',
          },
        },
        {
          destination: 'colors.scss',
          format: 'scss/variables',
          filter: {
            type: 'color',
          }
        },
        {
          destination: 'borderRadius.scss',
          format: 'scss/variables',
          filter: {
            type: 'borderRadius',
          },
        },
        {
          destination: 'borderWidth.scss',
          format: 'scss/variables',
          filter: {
            type: 'borderWidth',
          },
        },
        {
          destination: 'fontFamilies.scss',
          format: 'scss/variables',
          filter: {
            type: 'fontFamilies',
          },
        },
        {
          destination: 'lineHeights.scss',
          format: 'scss/variables',
          filter: {
            type: 'lineHeights',
          },
        },
        {
          destination: 'letterSpacing.scss',
          format: 'scss/variables',
          filter: {
            type: 'letterSpacing',
          },
        },
        {
          destination: 'paragraphSpacing.scss',
          format: 'scss/variables',
          filter: {
            type: 'paragraphSpacing',
          },
        },
        {
          destination: 'fontWeights.scss',
          format: 'scss/variables',
          filter: {
            type: 'fontWeights',
          },
        },
        {
          destination: 'fontSizes.scss',
          format: 'scss/variables',
          filter: {
            type: 'fontSizes',
          },
        },
      ],
    },
  },
};
