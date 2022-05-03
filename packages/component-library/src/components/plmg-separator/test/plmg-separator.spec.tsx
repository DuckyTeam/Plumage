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
            <div>
              <hr class="horizontal plmg-separator thin" />
            </div>
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
          <div class="plmg-separator-container">
            <hr class="plmg-separator thin" />
          </div>
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  it('renders thick width', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator thickness="thick"></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator thickness="thick">
        <mock:shadow-root>
          <div>
            <hr class="horizontal plmg-separator thick" />
          </div>
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  it('renders thick width vertical hr', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator thickness="thick" direction="vertical"></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator thickness="thick" direction="vertical">
        <mock:shadow-root>
          <div class="plmg-separator-container">
            <hr class="plmg-separator thick" />
          </div>
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
          <div>
            <hr class="horizontal plmg-separator thin" />
          </div>
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
});
