import { newSpecPage } from '@stencil/core/testing';
import { TextInput } from '../plmg-text-input';
import type { AnyHTMLElement } from '@stencil/core/internal';

//The values for the input id are randomly generated, so we
//can't expect a certain value for them in our test strings.
//I don't think toEqualHtml() allows regex. I'm removing the
//randomized attributes instead before checking the html equals
//the string
const removeUUIDAttributes = (pageRoot: AnyHTMLElement) => {
  const label = pageRoot.getElementsByTagName('label');
  label[0].removeAttribute('htmlFor');
  const input = pageRoot.getElementsByTagName('input');
  input[0].removeAttribute('id');
};

describe('plmg-text-input', () => {
  it('renders default', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input label="Default"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Default">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          Default
        </label>
        <input autocomplete="off" class="medium full-width" type="text"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders name', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input label="Default" name="my-name"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Default" name="my-name">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          Default
        </label>

        <input autocomplete="off" class="medium full-width" name="my-name" type="text"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders a set width', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input size="large" width="20" label="Large"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Large" size="large" width="20">
      <div class="plmg-text-input-wrapper">
        <label class="large plmg-text-input-label">
          Large
        </label>
        <input autocomplete="off" class="large" style="width: 20px;" type="text" />
      </div>
    </plmg-text-input>
    `);
  });

  it('renders minlength', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input min-length="5" label="Min Length"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input min-length="5" label="Min Length">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          Min Length
        </label>
        <input autocomplete="off" class="medium full-width" type="text" minlength="5"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders maxlength', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input max-length="10" label="Max Length"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input max-length="10" label="Max Length">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          Max Length
        </label>
        <input autocomplete="off" class="medium full-width" type="text" maxlength="10"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders large', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input size="large" label="Large"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Large" size="large">
      <div class="plmg-text-input-wrapper">
        <label class="large plmg-text-input-label">
          Large
        </label>
        <input autocomplete="off" class="full-width large" type="text"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders with the label hidden', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input show-label="false" label="Hidden"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Hidden" show-label="false">
      <div class="plmg-text-input-wrapper">
        <label
          class="medium plmg-text-input-label visually-hidden"
         
        >
          Hidden
        </label>
        <input autocomplete="off" class="medium full-width" type="text"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders tip', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input tip="Tip Text" label="Tip"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Tip" tip="Tip Text">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          Tip
        </label>
        <input autocomplete="off" class="medium full-width" type="text"/>
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
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Error" error-message="error">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          Error
        </label>
        <input autocomplete="off" class="error medium full-width" type="text"/>
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
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input disabled="true" label="disabled">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          disabled
        </label>
        <input autocomplete="off" class="medium full-width" disabled type="text">
      </div>
    </plmg-text-input>
    `);
  });

  it('renders read-only', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input read-only="true" label="read-only"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input read-only="true" label="read-only">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          read-only
        </label>
        <input autocomplete="off" class="medium full-width" readonly type="text"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders with autocomplete on', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input auto-complete="on" label="autocomplete"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input auto-complete="on" label="autocomplete">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          autocomplete
        </label>
        <input autocomplete="on" class="medium full-width" type="text"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders with a placeholder', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input placeholder="placeholder" label="placeholder"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input placeholder="placeholder" label="placeholder">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          placeholder
        </label>
        <input autocomplete="off" placeholder="placeholder" class="medium full-width" type="text"/>
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
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="Default">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          Default
        </label>
        <input autocomplete="off" class="medium full-width" type="text"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders as type password', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="password" label="password"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input label="password" type="password">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          password
        </label>
        <input autocomplete="off" type="password" class="medium full-width"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders as type email', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="email" label="email"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
      <plmg-text-input label="email" type="email">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label">
            email
          </label>
          <input autocomplete="off" type="email" class="medium full-width"/>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type email', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="email" label="email"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
      <plmg-text-input label="email" type="email">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label">
            email
          </label>
          <input autocomplete="off" type="email" class="medium full-width" type="text"/>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type email', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="email" label="email"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
      <plmg-text-input label="email" type="email">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label">
            email
          </label>
          <input autocomplete="off" type="email" class="medium full-width" type="text"/>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type tel', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="tel" label="tel"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
      <plmg-text-input label="tel" type="tel">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label">
            tel
          </label>
          <input autocomplete="off" type="tel" class="medium full-width"/>
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type url', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="url" label="url"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
      <plmg-text-input label="url" type="url">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label">
            url
          </label>
          <input autocomplete="off" type="url" class="medium full-width">
        </div>
      </plmg-text-input>
    `);
  });

  it('renders as type search', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="search" label="search"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
      <plmg-text-input label="search" type="search">
        <div class="plmg-text-input-wrapper">
          <label class="medium plmg-text-input-label">
            search
          </label>
          <input autocomplete="off" type="search" class="medium full-width"/>
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
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input type="number" label="number">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          number
        </label>
        <input autocomplete="off" class="medium full-width" type="number"/>
      </div>
    </plmg-text-input>
    `);
  });

  it('renders with a min value', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="number" min="0" label="number"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input type="number" min="0" label="number">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          number
        </label>
        <input autocomplete="off" class="medium full-width" type="number" min="0"/>
      </div>
    </plmg-text-input>
    `);
  });
  it('renders with a max value', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="number" max="10" label="number"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input type="number" max="10"label="number">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          number
        </label>
        <input autocomplete="off" class="medium full-width" type="number" max="10"/>
      </div>
    </plmg-text-input>
    `);
  });
  it('renders with a step', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input type="number" step="10" label="number"></plmg-text-input>`,
    });
    removeUUIDAttributes(page.root);

    expect(page.root).toEqualHtml(`
    <plmg-text-input type="number" step="10" label="number">
      <div class="plmg-text-input-wrapper">
        <label class="medium plmg-text-input-label">
          number
        </label>
        <input autocomplete="off" class="medium full-width" type="number" step="10"/>
      </div>
    </plmg-text-input>
    `);
  });
});
