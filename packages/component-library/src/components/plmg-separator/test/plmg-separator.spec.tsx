import { newSpecPage } from '@stencil/core/testing';
import { Separator } from '../plmg-separator';

describe('plmg-separator', () => {
  it('renders default', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator>
        <mock:shadow-root>
          <hr class="plmg-separator thin" />
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  it('renders vertical hr', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator direction="vertical"></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator direction="vertical">
        <mock:shadow-root>
          <hr class="plmg-separator thin vertical" />
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  it('renders thick width', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator width="thick"></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator width="thick">
        <mock:shadow-root>
          <hr class="plmg-separator thick" />
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  it('renders thick width vertical hr', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator width="thick" direction="vertical"></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator width="thick" direction="vertical">
        <mock:shadow-root>
          <hr class="plmg-separator thick vertical" />
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  it('incorrect prop passed in direction', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator direction="diagonal"></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator direction="diagonal">
        <mock:shadow-root>
          <hr class="plmg-separator thin" />
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
});
