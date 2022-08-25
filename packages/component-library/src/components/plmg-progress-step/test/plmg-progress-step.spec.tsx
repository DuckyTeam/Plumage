import { newSpecPage } from '@stencil/core/testing';
import { ProgressStep } from '../plmg-progress-step';

describe('plmg-progress-stepper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProgressStep],
      html: `<plmg-progress-step></plmg-progress-step>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-progress-step>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-progress-step>
    `);
  });
});
