import { newSpecPage } from '@stencil/core/testing';
import { TextInput } from '../plmg-text-input';

describe('plmg-text-input', () => {
  it('renders default', async () => {
    const page = await newSpecPage({
      components: [TextInput],
      html: `<plmg-text-input label="Text Input"></plmg-text-input>`,
    });
    expect(page.root).toEqualHtml(`

    <plmg-text-input label="Text Input">
    <label class="label medium" htmlfor="text-input" aria-label="Text Input">Text Input</label>
      <div class="plmg-text-input-field-wrapper" tabindex="0">
        <input class="medium" id="text-input" type="text" name="Text Input">
        </div>
    </plmg-text-input>
    `);
  });
});
