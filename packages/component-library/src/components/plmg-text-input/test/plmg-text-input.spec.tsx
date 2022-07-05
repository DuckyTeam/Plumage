import { newSpecPage } from '@stencil/core/testing';
import { TextInput } from '../plmg-text-input';

describe('plmg-text-input', () => {
  it('renders default', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input label-text="Text Input"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`

    <plmg-text-input label-text="Text Input">
    <label aria-hidden="false" class="label medium" htmlfor="text-input">Text Input</label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
        <input class="medium" autocomplete="off" name="Text Input" id="text-input" type="text">
        </div>
    </plmg-text-input>
    `);
  });
});
