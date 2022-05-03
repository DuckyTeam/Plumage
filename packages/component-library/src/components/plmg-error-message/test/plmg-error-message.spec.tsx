import { newSpecPage } from '@stencil/core/testing';
import { ErrorMessage } from '../plmg-error-message';

describe('plmg-error-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ErrorMessage],
      html: `<plmg-error-message values=${[
        'val1',
        'val2',
      ]}></plmg-error-message>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-error-message>
        <div class="error-message-wrapper medium">
          <plmg-svg-icon icon="warningAmber"></plmg-svg-icon>
          <span></span>
        </div>
      </plmg-error-message>
    `);
  });
});
