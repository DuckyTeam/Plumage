const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'size/px', // notice: the name is an override of an existing predefined method
  type: 'value',
  matcher: function (token) {
    /* supports both "pixel" and "pixels" */
    return (
      token &&
      token.original &&
      token.original.unit &&
      token.original.unit.startsWith('pixel')
    );
  },
  transformer: function (token) {
    return `${token.value}px`;
  },
});

StyleDictionary.registerTransform({
  name: `resolveChainingValues`,
  type: `value`,
  transitive: true,
  matcher: function (token) {
    return (
        token &&
        typeof token.value === 'string' &&
        token.value.startsWith('$')
    );
  },
  transformer: function (token) {
    // token.value will be resolved and transformed at this point
    let path = token.original.value.replace('$', '').split('.');
    path.unshift(...['values', 'global']);
    console.log('foo', token)
    return 'foo';

    // TODO resolve the path in design-tokens.json (ps: use token.filePath) recursively until there is no more '$'
  }
})

module.exports = {
  source: ['./src/tokens/design-tokens.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: './src/tokens/dist/',
      transforms: ['size/px', 'name/ti/camel', 'resolveChainingValues'],
      /* We split tokens into separate files - it will be easier to use them this way */
      files: [
        {
          destination: 'sizes.scss',
          format: 'scss/variables',
          filter: {
            type: 'sizing',
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
          destination: 'typography.scss',
          format: 'scss/variables',
          filter: {
            type: 'typography',
          },
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
          destination: 'boxShadow.scss',
          format: 'scss/variables',
          filter: {
            type: 'boxShadow',
          },
        },
        {
          destination: 'opacity.scss',
          format: 'scss/variables',
          filter: {
            type: 'opacity',
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
