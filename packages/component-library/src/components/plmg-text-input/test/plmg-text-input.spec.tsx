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
        <input class="medium" id="default" type="text" name="Default">
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
        <input class="large" id="large" type="text" name="Large">
        </div>
    </plmg-text-input>
    `);
  });
  it('renders large', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input size="small" label="small"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`

    <plmg-text-input label="small" size="small">
    <div class="plmg-text-input-wrapper">
    <label class="small plmg-text-input-label" htmlfor="small">
    small
    </label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
        <input class="small" id="small" type="text" name="small">
        </div>
    </plmg-text-input>
    `);
  });
  it('renders labeless', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input show-label="false" label="Hidden"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`

    <plmg-text-input label="Hidden" show-label="false">
    <div class="plmg-text-input-wrapper">
    <label class="medium plmg-text-input-label visually-hidden" htmlfor="hidden">
    Hidden
    </label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
      <input class="medium" id="hidden" type="text" name="Hidden">
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
      <input class="medium" id="tip" type="text" name="Tip">
        </div>
      <span class="medium plmg-text-input-tip">Tip Text</span>
    </plmg-text-input>
    `);
  });
  it('renders error', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input error="error" label="Error"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`

    <plmg-text-input label="Error" error="error">
    <div class="plmg-text-input-wrapper">
    <label class="medium plmg-text-input-label" htmlfor="error">Error</label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
      <input class="error medium" name="Error" id="error" type="text">
        </div>
        <plmg-error-message message="error" size="medium" style="margin-top: 8px;"></plmg-error-message>
    `);
  });
  it('renders default value', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input default-value="default value" label="Default Value"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`

    <plmg-text-input default-value="default value" label="Default Value">
    <div class="plmg-text-input-wrapper">
    <label class="medium plmg-text-input-label" htmlfor="default-value">Default Value</label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
        <input class="medium" name="Default Value" id="default-value" type="text">
      </div>
    `);
  });
  it('renders required', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input required="true" value="Default" label="Required"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`

    <plmg-text-input required="true" label="Required" value="Default">
    <div class="plmg-text-input-wrapper">
    <label class="medium plmg-text-input-label" htmlfor="required">Required
    <span class="required">*</span>
    </label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
      <input class="medium" name="Required" id="required" required type="text">
      </div>
    `);
  });
});
