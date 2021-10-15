const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'size/px', // notice: the name is an override of an existing predefined method
  type: 'value',
  matcher: function (prop) {
    /* supports both "pixel" and "pixels" */
    return (
      prop &&
      prop.original &&
      prop.original.unit &&
      prop.original.unit.startsWith('pixel')
    );
  },
  transformer: function (prop) {
    return `${prop.value}px`;
  },
});

module.exports = {
  source: ['./src/tokens/design-tokens.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: './src/tokens/dist/',
      transforms: ['size/px', 'name/ti/camel'],
      /* We split tokens into separate files - it will be easier to use them this way */
      files: [
        {
          destination: 'sizes.css',
          format: 'css/variables',
          filter: {
            type: 'sizing',
          },
        },
        {
          destination: 'spacing.css',
          format: 'css/variables',
          filter: {
            type: 'spacing',
          },
        },
        {
          destination: 'colors.css',
          format: 'css/variables',
          filter: {
            type: 'color',
          },
        },
        {
          destination: 'typography.css',
          format: 'css/variables',
          filter: {
            type: 'typography',
          },
        },
        {
          destination: 'borderRadius.css',
          format: 'css/variables',
          filter: {
            type: 'borderRadius',
          },
        },
        {
          destination: 'borderWidth.css',
          format: 'css/variables',
          filter: {
            type: 'borderWidth',
          },
        },
        {
          destination: 'boxShadow.css',
          format: 'css/variables',
          filter: {
            type: 'boxShadow',
          },
        },
        {
          destination: 'opacity.css',
          format: 'css/variables',
          filter: {
            type: 'opacity',
          },
        },
        {
          destination: 'fontFamilies.css',
          format: 'css/variables',
          filter: {
            type: 'fontFamilies',
          },
        },
        {
          destination: 'lineHeights.css',
          format: 'css/variables',
          filter: {
            type: 'lineHeights',
          },
        },
        {
          destination: 'letterSpacing.css',
          format: 'css/variables',
          filter: {
            type: 'letterSpacing',
          },
        },
        {
          destination: 'paragraphSpacing.css',
          format: 'css/variables',
          filter: {
            type: 'paragraphSpacing',
          },
        },
        {
          destination: 'fontWeights.css',
          format: 'css/variables',
          filter: {
            type: 'fontWeights',
          },
        },
        {
          destination: 'fontSizes.css',
          format: 'css/variables',
          filter: {
            type: 'fontSizes',
          },
        },
      ],
    },
  },
};
