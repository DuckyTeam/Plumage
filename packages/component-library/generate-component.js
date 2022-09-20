/* Usage: node generate-component.js plmg-component-name */
const fs = require('fs');
const path = require('path');

/**
 * Validates that a component tag meets required naming conventions to be used for a web component
 * @param tag the tag to validate
 * @returns an error message if the tag has an invalid name, undefined if the tag name passes all checks
 */
const validateComponentTag = (tag) => {
  if (!tag || tag === '') {
    return `Provide the name of the component`;
  }
  if (tag !== tag.trim()) {
    return `Tag can not contain white spaces`;
  }
  if (tag !== tag.toLowerCase()) {
    return `Tag can not contain upper case characters`;
  }
  if (typeof tag !== 'string') {
    return `Tag "${tag}" must be a string type`;
  }
  if (tag.length === 0) {
    return `Received empty tag value`;
  }

  if (tag.indexOf(' ') > -1) {
    return `"${tag}" tag cannot contain a space`;
  }

  if (tag.indexOf(',') > -1) {
    return `"${tag}" tag cannot be used for multiple tags`;
  }

  const invalidChars = tag.replace(/\w|-/g, '');
  if (invalidChars !== '') {
    return `"${tag}" tag contains invalid characters: ${invalidChars}`;
  }

  if (tag.indexOf('-') === -1) {
    return `"${tag}" tag must contain a dash (-) to work as a valid web component`;
  }

  if (tag.indexOf('--') > -1) {
    return `"${tag}" tag cannot contain multiple dashes (--) next to each other`;
  }

  if (tag.indexOf('-') === 0) {
    return `"${tag}" tag cannot start with a dash (-)`;
  }

  if (tag.lastIndexOf('-') === tag.length - 1) {
    return `"${tag}" tag cannot end with a dash (-)`;
  }

  if (!tag.startsWith('plmg-')) {
    return `"${tag}" tag must start with "plmg-"`;
  }
  return undefined;
};

/**
 * Task to generate component boilerplate.
 */
const taskGenerate = () => {
  const absoluteSrcDir = path.join(__dirname, 'src');

  const componentName = process.argv[2];

  const tagError = validateComponentTag(componentName);
  if (tagError) {
    console.error(tagError);
    return process.exit(1);
  }

  const extensionsToGenerate = [
    'tsx',
    'scss',
    'spec.tsx',
    'e2e.ts',
    'stories.js',
  ];

  const testFolder = 'test';

  const outDir = path.join(absoluteSrcDir, 'components', componentName);
  fs.mkdirSync(path.join(outDir, testFolder), { recursive: true });

  const writtenFiles = extensionsToGenerate.map((extension) =>
    writeFileByExtension(outDir, componentName, extension, true)
  );

  if (!writtenFiles) {
    return process.exit(1);
  }

  console.log();
  console.log();
  console.log('The following files have been generated:');

  const absoluteRootDir = __dirname;
  writtenFiles.map((file) =>
    console.log(`  - ${path.relative(absoluteRootDir, file)}`)
  );
};

/**
 * Get a file's boilerplate by its extension and write it to disk.
 */
const writeFileByExtension = (filePath, name, extension, withStyle) => {
  if (isTest(extension)) {
    filePath = path.join(filePath, 'test');
  }
  const outFile = path.join(filePath, `${name}.${extension}`);
  const boilerplate = getBoilerplateByExtension(name, extension, withStyle);
  fs.writeFileSync(outFile, boilerplate);

  return outFile;
};

const isTest = (extension) => {
  return extension === 'e2e.ts' || extension === 'spec.tsx';
};

/**
 * Get the boilerplate for a file by its extension.
 */
const getBoilerplateByExtension = (tagName, extension, withStyle) => {
  switch (extension) {
    case 'tsx':
      return getComponentBoilerplate(tagName, withStyle);

    case 'scss':
      return getStyleUrlBoilerplate();

    case 'spec.tsx':
      return getSpecTestBoilerplate(tagName);

    case 'e2e.ts':
      return getE2eTestBoilerplate(tagName);

    case 'stories.js':
      return getStorybookStoryBoilerplate(tagName);

    default:
      throw new Error(`Unkown extension "${extension}".`);
  }
};

/**
 * Get the boilerplate for a component.
 */
const getComponentBoilerplate = (tagName, hasStyle) => {
  const decorator = [`{`];
  decorator.push(`  tag: '${tagName}',`);
  if (hasStyle) {
    decorator.push(`  styleUrl: '${tagName}.scss',`);
  }
  decorator.push(`  shadow: true,`);
  decorator.push(`}`);

  return `import { Component, Host, h } from '@stencil/core';

@Component(${decorator.join('\n')})
export class ${toComponentName(tagName)} {

  /**
   * 1. Own Properties
   * Always set the type. 
   * List the own properties in alphabetical order.
   * Note that because these properties do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
  // flag: boolean = false;
   
  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   *
   * import { Element } from '@stencil/core';
   */
  // @Element() el: HTMLElement;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   *
   * import { State } from '@stencil/core';
   */
  // @State() isValidated: boolean;

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   *
   * import { Prop, Watch } from '@stencil/core';
   */
  // @Prop() fullWidth: boolean = false;
  /** Prop lifecycle events SHOULD go just behind the Prop they listen to. */
  // @Watch('fullWidth')
  // validateFullWidth(newValue: boolean) {
  //   if (typeof newValue !== 'boolean')
  //     throw new Error('fullWidth: must be boolean');
  // }

  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   *
   * import { Event, EventEmitter } from '@stencil/core';
   */
  // @Event() click: EventEmitter<EnterExplicitEventTypeHere>;

  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example WillLoad should go before DidLoad.
   */
  // connectedCallback() {}
  // componentWillLoad() {}
  // componentDidLoad() {}
  // disconnectedCallback() {}

  /**
   * 7. Listeners
   * It is ok to place them in a different location if makes more sense in the context.
   * Recommend starting a listener method with "on".
   * Always use two lines.
   *
   * import { Listen } from '@stencil/core';
   */
  // @Listen('click', {})
  // onClick(event: UIEvent) { ... }

  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Requires JSDocs for public API documentation.
   *
   * import { Method } from '@stencil/core';
   */
  // @Method()
  // open() { ... }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
`;
};

/**
 * Get the boilerplate for style.
 */
const getStyleUrlBoilerplate = () =>
  `@use '~@ducky/plumage-tokens/dist/scss/default' as tokens;

// Common styles to all shadow-DOM components
// Remove this section if your component does not use shadow DOM
// -------------------------------------------------
:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
// ------------- END Common styles -----------------

// Mixins
// -------------------------------------------------
@mixin set-border($border-color, $border-width: tokens.$plmg-border-width-s) {
  border: $border-width solid $border-color;
}
// ------------- END Mixins ------------------------

// Component style
// -------------------------------------------------
main-tag {
  // Fixed styles
  

  // Controls
  

  // States
  &:hover {
  }
  &:active {
  }
  &:focus-visible {
  }
}
// ------------- END Component style ---------------
`;

/**
 * Get the boilerplate for a spec test.
 */
const getSpecTestBoilerplate = (tagName) =>
  `import { newSpecPage } from '@stencil/core/testing';
import { ${toComponentName(tagName)} } from '../${tagName}';

describe('${tagName}', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [${toComponentName(tagName)}],
      html: \`<${tagName}></${tagName}>\`,
    });
    expect(page.root).toEqualHtml(\`
      <${tagName}>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </${tagName}>
    \`);
  });
});
`;

/**
 * Get the boilerplate for an E2E test.
 */
const getE2eTestBoilerplate = (name) =>
  `import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('${name}', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<${name}></${name}>');

    const element = await page.find('${name}');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = '';
      someControl.forEach((control) => {
                htmlContent += \`
    <${name} control="\${control}">
  control="\${control}"
    </${name}>
<br/>
    \`;
      });
      await page.setContent('<main>' + htmlContent + '</main>');

      const results = await new AxePuppeteer(page as unknown as Page)
        .disableRules([
          'document-title',
          'html-has-lang',
          'landmark-one-main',
          'page-has-heading-one',
        ])
        .analyze();

      expect(results.violations).toHaveLength(0);
    });
  });
});
`;

/**
 * Get the boilerplate for a Storybook Story.
 */
const getStorybookStoryBoilerplate = (name) =>
  `import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/${toComponentName(name)}',
  parameters: {},
  decorators: [],
  argTypes: {
    color: {
      options: ['primary', 'neutral', 'standout', 'danger'],
      control: { type: 'select' }
    }
  }
};

const PROPS = ['color'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['text'];

const Template = (args) => {
  const el = document.createElement('${name}');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'neutral';
Primary.args = {
  text: '${toComponentName(name)}',
  color: 'neutral',
};

export const All = (args) => {
  let htmlContent = '';
  someControls.forEach((control) => {
    htmlContent += \`
<${name} control="\${control}" >
    control="\${control}"
</${name}>
<br/>
              \`;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
All.storyName = 'All variations';
`;

/**
 * Convert a dash case string to pascal case.
 */
const toComponentName = (str) =>
  str
    .replace('plmg-', '')
    .split('-')
    .reduce((res, part) => res + part[0].toUpperCase() + part.substr(1), '');

// Run the thing
taskGenerate();
