import { newSpecPage } from '@stencil/core/testing';
import { Status } from '../plmg-status';

describe('plmg-status', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Status],
      html: `<plmg-status variant="neutral">Label</plmg-status>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-status variant="neutral">
        <mock:shadow-root>
          <span class="plmg-status neutral">
          <slot></slot>
          </span>
        </mock:shadow-root>
        Label
      </plmg-status>
    `);
  });

  it('renders icon left', async () => {
    const page = await newSpecPage({
      components: [Status],
      html: `<plmg-status variant="neutral" icon-left="duck">Label</plmg-status>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-status icon-left="duck" variant="neutral">
        <mock:shadow-root>
          <span class="plmg-status neutral">
            <plmg-svg-icon class="icon-left" icon="duck"></plmg-svg-icon>
          <slot></slot>
          </span>
        </mock:shadow-root>
        Label
      </plmg-status>
    `);
  });

  it('renders icon right', async () => {
    const page = await newSpecPage({
      components: [Status],
      html: `<plmg-status variant="neutral" icon-right="duck">Label</plmg-status>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-status icon-right="duck" variant="neutral">
        <mock:shadow-root>
          <span class="plmg-status neutral">
          <slot></slot>
            <plmg-svg-icon class="icon-right" icon="duck"></plmg-svg-icon>
          </span>
        </mock:shadow-root>
        Label
      </plmg-status>
    `);
  });
});
