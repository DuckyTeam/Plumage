import { newSpecPage } from '@stencil/core/testing';
import { ProgressStepper } from '../plmg-progress-stepper';

describe('plmg-progress-stepper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProgressStepper],
      html: `<plmg-progress-stepper></plmg-progress-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-progress-stepper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plmg-progress-stepper>
    `);
  });
});
