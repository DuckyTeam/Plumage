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
        /* Filter and extract color tokens*/
        {
          destination: 'colors.css',
          format: 'css/variables',
          filter: {
            type: 'color',
          },
        },
      ],
    },
  },
};
