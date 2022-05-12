import { newSpecPage } from '@stencil/core/testing';
import { Separator } from '../plmg-separator';
import { plmgColorBorderNeutral } from '@ducky/plumage-tokens';

describe('plmg-separator', () => {
  it('renders default', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator>
        <mock:shadow-root>
            <div class="plmg-separator-container-horizontal">
              <hr class="plmg-separator horizontal thin" style="background-color: ${plmgColorBorderNeutral}">
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
          <div class="plmg-separator-container-vertical thin vertical" style="background-color: ${plmgColorBorderNeutral}">
            <hr class="plmg-separator thin vertical" style="background-color: ${plmgColorBorderNeutral}">
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
            <div class="plmg-separator-container-horizontal">
              <hr class="plmg-separator horizontal thick" style="background-color: ${plmgColorBorderNeutral}">
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
      <plmg-separator direction="vertical" thickness="thick">
        <mock:shadow-root>
          <div class="plmg-separator-container-vertical thick vertical" style="background-color: ${plmgColorBorderNeutral}">
            <hr class="plmg-separator thick vertical" style="background-color: ${plmgColorBorderNeutral}">
          </div>
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  it('renders thick vertical user defined color', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator thickness="thick" direction="vertical" color="#fff"></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
    <plmg-separator color="#fff" direction="vertical" thickness="thick">
      <mock:shadow-root>
        <div class="plmg-separator-container-vertical thick vertical" style="background-color: #fff">
          <hr class="plmg-separator thick vertical" style="background-color: #fff">
        </div>
      </mock:shadow-root>
    </plmg-separator>
    `);
  });
});
