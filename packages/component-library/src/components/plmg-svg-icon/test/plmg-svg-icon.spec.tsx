import { newSpecPage } from '@stencil/core/testing';
import { SvgIcon } from '../plmg-svg-icon';

describe('plmg-svg-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvgIcon],
      html: `<plmg-svg-icon icon="sample-icon"></plmg-svg-icon>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-svg-icon icon="sample-icon">
        <mock:shadow-root>
          <div class="plmg-svg-icon" style="font-size: 1em; color: inherit;"></div>
        </mock:shadow-root>
      </plmg-svg-icon>
    `);
  });

  it('renders with custom color', async () => {
    const page = await newSpecPage({
      components: [SvgIcon],
      html: `<plmg-svg-icon icon="sample-icon" color="red"></plmg-svg-icon>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-svg-icon icon="sample-icon" color="red">
        <mock:shadow-root>
          <div class="plmg-svg-icon" style="font-size: 1em; color: red;"></div>
        </mock:shadow-root>
      </plmg-svg-icon>
    `);
  });

  it('renders with custom size', async () => {
    const page = await newSpecPage({
      components: [SvgIcon],
      html: `<plmg-svg-icon icon="sample-icon" size="2em"></plmg-svg-icon>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-svg-icon icon="sample-icon" size="2em">
        <mock:shadow-root>
          <div class="plmg-svg-icon" style="font-size: 2em; color: inherit;"></div>
        </mock:shadow-root>
      </plmg-svg-icon>
    `);
  });
});
