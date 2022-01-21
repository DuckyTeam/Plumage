const StyleDictionary = require('style-dictionary');

// Config file for Style-Dictionary
// Takes the data/design-tokens.json
// Convert it to various format

StyleDictionary.registerTransform({
  name: `format-plumage-prefix`,
  type: `name`,
  transformer: function (token) {
    return token.name
      .replace('plumage-plumage-plmg', 'plmg')
      .replace('plumage-playful-plumage-plmg-', 'plmg-playful-')
      .replace('plumage-focused-plumage-plmg-', 'plmg-focused-')
      .replace('plumage', 'plmg');
  },
});

StyleDictionary.registerTransform({
  name: `format-plumage-prefix-camel`,
  type: `name`,
  transformer: function (token) {
    return token.name
      .replace('plumagePlumagePlmg', 'plmg')
      .replace('plumagePlayfulPlumagePlmg', 'plmgPlayful')
      .replace('plumageFocusedPlumagePlmg', 'plmgFocused')
      .replace('plumage', 'plmg');
  },
});

StyleDictionary.registerFilter({
  name: 'isThemeDefault',
  matcher: function (token) {
    return (
      !token.name.startsWith('plmg-playful') &&
      !token.name.startsWith('plmg-focused')
    );
  },
});

StyleDictionary.registerFilter({
  name: 'isThemePlayful',
  matcher: function (token) {
    return token.name.startsWith('plmg-playful');
  },
});

StyleDictionary.registerFilter({
  name: 'isThemeFocused',
  matcher: function (token) {
    return token.name.startsWith('plmg-focused');
  },
});

StyleDictionary.registerFilter({
  name: 'isThemeDefault-camel',
  matcher: function (token) {
    return (
      !token.name.startsWith('plmgPlayful') &&
      !token.name.startsWith('plmgFocused')
    );
  },
});

StyleDictionary.registerFilter({
  name: 'isThemePlayful-camel',
  matcher: function (token) {
    return token.name.startsWith('plmgPlayful');
  },
});

StyleDictionary.registerFilter({
  name: 'isThemeFocused-camel',
  matcher: function (token) {
    return token.name.startsWith('plmgFocused');
  },
});

module.exports = {
  source: ['./src/data/design-tokens.json'],
  platforms: {
    scss: {
      buildPath: './dist/scss/',
      transformGroup: 'scss',
      transforms: ['attribute/cti', 'name/cti/kebab', 'format-plumage-prefix'],
      files: [
        {
          destination: 'default.scss',
          format: 'scss/variables',
          filter: 'isThemeDefault',
        },
        {
          destination: 'playful.scss',
          format: 'scss/variables',
          filter: 'isThemePlayful',
        },
        {
          destination: 'focused.scss',
          format: 'scss/variables',
          filter: 'isThemeFocused',
        },
      ],
    },
    css: {
      buildPath: './dist/css/',
      transformGroup: 'css',
      transforms: ['attribute/cti', 'name/cti/kebab', 'format-plumage-prefix'],
      files: [
        {
          destination: 'default.css',
          format: 'css/variables',
          filter: 'isThemeDefault',
        },
        {
          destination: 'playful.css',
          format: 'css/variables',
          filter: 'isThemePlayful',
        },
        {
          destination: 'focused.css',
          format: 'css/variables',
          filter: 'isThemeFocused',
        },
      ],
    },
    less: {
      buildPath: './dist/less/',
      transformGroup: 'less',
      transforms: ['attribute/cti', 'name/cti/kebab', 'format-plumage-prefix'],
      files: [
        {
          destination: 'default.less',
          format: 'less/variables',
          filter: 'isThemeDefault',
        },
        {
          destination: 'playful.less',
          format: 'less/variables',
          filter: 'isThemePlayful',
        },
        {
          destination: 'focused.less',
          format: 'less/variables',
          filter: 'isThemeFocused',
        },
      ],
    },
    JS_flat: {
      buildPath: './dist/js/',
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/camel',
        'format-plumage-prefix-camel',
      ],
      files: [
        {
          destination: 'default.js',
          format: 'javascript/module-flat',
          filter: 'isThemeDefault-camel',
        },
        {
          destination: 'playful.js',
          format: 'javascript/module-flat',
          filter: 'isThemePlayful-camel',
        },
        {
          destination: 'focused.js',
          format: 'javascript/module-flat',
          filter: 'isThemeFocused-camel',
        },
      ],
    },
    JS_es6_with_TS_declarations: {
      buildPath: './dist/es6/',
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/camel',
        'format-plumage-prefix-camel',
      ],
      files: [
        {
          destination: 'default.js',
          format: 'javascript/es6',
          filter: 'isThemeDefault-camel',
        },
        {
          destination: 'default.d.ts',
          format: 'typescript/es6-declarations',
          filter: 'isThemeDefault-camel',
        },
        {
          destination: 'playful.js',
          format: 'javascript/es6',
          filter: 'isThemePlayful-camel',
        },
        {
          destination: 'playful.d.ts',
          format: 'typescript/es6-declarations',
          filter: 'isThemePlayful-camel',
        },
        {
          destination: 'focused.js',
          format: 'javascript/es6',
          filter: 'isThemeFocused-camel',
        },
        {
          destination: 'focused.d.ts',
          format: 'typescript/es6-declarations',
          filter: 'isThemeFocused-camel',
        },
      ],
    },
    json_flat: {
      buildPath: './dist/json/',
      transformGroup: 'css',
      transforms: ['attribute/cti', 'name/cti/kebab', 'format-plumage-prefix'],
      files: [
        {
          destination: 'default.json',
          format: 'json/flat',
          filter: 'isThemeDefault',
        },
        {
          destination: 'playful.json',
          format: 'json/flat',
          filter: 'isThemePlayful',
        },
        {
          destination: 'focused.json',
          format: 'json/flat',
          filter: 'isThemeFocused',
        },
      ],
    },
  },
};
