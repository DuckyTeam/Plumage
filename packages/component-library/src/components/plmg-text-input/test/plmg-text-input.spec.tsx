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
    <label class="label-visible medium" htmlfor="default" aria-label="Default">Default</label>
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
    <label class="label-visible large" htmlfor="large" aria-label="Large">Large</label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
        <input class="large" id="large" type="text" name="Large">
        </div>
    </plmg-text-input>
    `);
  });
  it('renders labeless', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input label-visible="false" label="Text Input"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
  
    <plmg-text-input label-visible="false" label="Text Input">
    <div class="plmg-text-input-wrapper">
    <label class="medium" htmlfor="text-input" aria-label="Text Input"></label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
      <input class="medium" id="text-input" type="text" name="Text Input">
        </div>
    </plmg-text-input>
    `);
  });
  it('renders tip', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input tip="true" tip-text="Tip Text" label="Tip"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
  
    <plmg-text-input label="Tip" tip="true" tip-text="Tip Text">
    <div class="plmg-text-input-wrapper">
    <label class="medium label-visible" htmlfor="tip" aria-label="Tip">Tip</label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
      <input class="medium" id="tip" type="text" name="Tip">
        </div>
      <span class="medium tip">Tip Text</span>
    </plmg-text-input>
    `);
  });
  it('renders error', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input error="true" error-text="error" label="Error Message"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
  
    <plmg-text-input label="Error Message" error="true" error-text="error">
    <div class="plmg-text-input-wrapper">
    <label class="medium label-visible" htmlfor="error-message" aria-label="Error Message">Error Message</label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
      <input class="error medium" name="Error Message" id="error-message" type="text">
        </div>
        <plmg-error-message size="medium" style="margin-top: 8px;"></plmg-error-message>
    `);
  });
  it('renders default value', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input filled="true" value="Default" label="Filled"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`
  
    <plmg-text-input filled="true" label="Filled" value="Default">
    <div class="plmg-text-input-wrapper">
    <label class="medium label-visible" htmlfor="filled" aria-label="Filled">Filled</label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
      <input class="medium" name="Filled" id="filled" type="text">
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
    <label class="medium label-visible" htmlfor="required" aria-label="Required">Required
    <span class="required">*</span>
    </label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
      <input class="medium" name="Required" id="required" required type="text">
      </div>
    `);
  });
});
