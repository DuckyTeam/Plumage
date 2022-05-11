import { newSpecPage } from '@stencil/core/testing';
import { ErrorMessage } from '../plmg-error-message';

describe('plmg-error-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ErrorMessage],
      html: `<plmg-error-message message="error!"></plmg-error-message>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-error-message message="error!">
        <div class="error-message-wrapper medium">
          <plmg-svg-icon icon="warningAmber" size="0.875rem"></plmg-svg-icon>
          <span>error!</span>
        </div>
      </plmg-error-message>
    `);
  });
});
