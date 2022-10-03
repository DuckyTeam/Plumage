import { newSpecPage } from '@stencil/core/testing';
import { TextInput } from '../plmg-text-input';

describe('plmg-text-input', () => {
  it('renders default', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input label="Default"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Default">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="default">
          Default
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="default" type="text"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders name', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input label="Default" name="my-name"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Default" name="my-name">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="default">
          Default
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="default" name="my-name" type="text"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders a set width', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input size="large" width="20" label="Large"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Large" size="large" width="20">
      <div class="plmg-text-input-wrapper">
        <label class="large plmg-text-input-label" htmlfor="large">
          Large
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="large" size="20" id="large" type="text" />
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders minlength', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input min-length="5" label="Min Length"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input min-length="5" label="Min Length">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="min-length">
          Min Length
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="min-length" type="text" minlength="5"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders maxlength', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input max-length="10" label="Max Length"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input max-length="10" label="Max Length">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="max-length">
          Max Length
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="max-length" type="text" maxlength="10"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders large', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input size="large" label="Large"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Large" size="large">
      <div class="plmg-text-input-wrapper">
        <label class="large plmg-text-input-label" htmlfor="large">
          Large
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="full-width large" id="large" type="text"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders with the label hidden', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input show-label="false" label="Hidden"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Hidden" show-label="false">
      <div class="plmg-text-input-wrapper">
        <label
          class="medium plmg-text-input-label visually-hidden"
          htmlfor="hidden"
        >
          Hidden
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="hidden" type="text"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders tip', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input tip="Tip Text" label="Tip"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Tip" tip="Tip Text">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="tip">
          Tip
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="tip" type="text"/>
        </div>
        <span class="medium plmg-text-input-tip">Tip Text</span>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders error message', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input error-message="error" label="Error"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Error" error-message="error">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="error">
          Error
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="error medium full-width" id="error" type="text"/>
        </div>
        <plmg-error-message
        message="error"
        size="medium"
        class="plmg-text-input-error-message"
        ></plmg-error-message>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input disabled="true" label="disabled"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input disabled="true" label="disabled">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="disabled">
          disabled
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" disabled id="disabled" type="text">
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders read-only', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input read-only="true" label="read-only"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input read-only="true" label="read-only">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="read-only">
          read-only
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" readonly id="read-only" type="text"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders with autocomplete on', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input auto-complete="on" label="autocomplete"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input auto-complete="on" label="autocomplete">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="autocomplete">
          autocomplete
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="on" class="medium full-width" id="autocomplete" type="text"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders with a placeholder', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input placeholder="placeholder" label="placeholder"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input placeholder="placeholder" label="placeholder">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="placeholder">
          placeholder
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" placeholder="placeholder" class="medium full-width" id="placeholder" type="text"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('should throw an error if the wrong size prop passed', async () => {
    try {
      await newSpecPage({
        components: [TextInput],
        html: `<plmg-text-input size="small" label="no such size"></plmg-text-input>`,
      });
    } catch (e) {
      expect(e.message).toBe('size must be a valid value');
    }
  });
});

describe('plmg-text-input types', () => {
  it('renders as type text by default', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input label="Default"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Default">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="default">
          Default
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="default" type="text"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders as type password', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="password" label="password"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input label="password" type="password">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="password">
          password
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" type="password" class="medium full-width" id="password"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders as type email', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="email" label="email"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-text-input label="email" type="email">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label" htmlfor="email">
            email
          </label>
          <div class="plmg-text-input-field-wrapper" tabindex="0">
            <input autocomplete="off" type="email" class="medium full-width" id="email"/>
          </div>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type email', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="email" label="email"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-text-input label="email" type="email">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label" htmlfor="email">
            email
          </label>
          <div class="plmg-text-input-field-wrapper" tabindex="0">
            <input autocomplete="off" type="email" class="medium full-width" id="email" type="text"/>
          </div>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type email', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="email" label="email"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-text-input label="email" type="email">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label" htmlfor="email">
            email
          </label>
          <div class="plmg-text-input-field-wrapper" tabindex="0">
            <input autocomplete="off" type="email" class="medium full-width" id="email" type="text"/>
          </div>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type tel', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="tel" label="tel"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-text-input label="tel" type="tel">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label" htmlfor="tel">
            tel
          </label>
          <div class="plmg-text-input-field-wrapper" tabindex="0">
            <input autocomplete="off" type="tel" class="medium full-width" id="tel"/>
          </div>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type url', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="url" label="url"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-text-input label="url" type="url">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label" htmlfor="url">
            url
          </label>
          <div class="plmg-text-input-field-wrapper" tabindex="0">
            <input autocomplete="off" type="url" class="medium full-width" id="url">
          </div>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type search', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="search" label="search"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-text-input label="search" type="search">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label" htmlfor="search">
            search
          </label>
          <div class="plmg-text-input-field-wrapper" tabindex="0">
            <input autocomplete="off" type="search" class="medium full-width" id="search"/>
          </div>
        </div>
      </plmg-text-input>
    `);
  });
});

describe('plmg-text-input type: number', () => {
  it('renders as type number', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="number" label="number"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input type="number" label="number">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="number">
          number
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="number" type="number"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders with a min value', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="number" min="0" label="number"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input type="number" min="0" label="number">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="number">
          number
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="number" type="number" min="0"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });
  it('renders with a max value', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="number" max="10" label="number"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input type="number" max="10"label="number">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="number">
          number
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="number" type="number" max="10"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });
  it('renders with a step', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="number" step="10" label="number"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-text-input type="number" step="10" label="number">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label" htmlfor="number">
          number
        </label>
        <div class="plmg-text-input-field-wrapper" tabindex="0">
          <input autocomplete="off" class="medium full-width" id="number" type="number" step="10"/>
        </div>
      </div>
    </plmg-text-input>
    `);
  });
});
