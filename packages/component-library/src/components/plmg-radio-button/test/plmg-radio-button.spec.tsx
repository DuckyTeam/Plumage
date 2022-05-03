import { newSpecPage } from '@stencil/core/testing';
import { RadioButton } from '../plmg-radio-button';

describe('plmg-radio-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<plmg-radio-button></plmg-radio-button>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-radio-button>
        <div class="radio-button-wrapper">
          <input type="radio">
          <label></label>
        </div>
      </plmg-radio-button>
    `);
  });
});
