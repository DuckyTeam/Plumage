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
            <hr class="plmg-separator horizontal thin">
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
            <hr class="plmg-separator vertical thin">
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
            <hr class="plmg-separator horizontal thick"/>
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
            <hr class="plmg-separator vertical thick"/>
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  it('renders color', async () => {
    const page = await newSpecPage({
      components: [Separator],
      html: `<plmg-separator color="#fff"></plmg-separator>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-separator color="#fff">
        <mock:shadow-root>
            <hr class="plmg-separator thin horizontal" style="background-color: #fff"/>
        </mock:shadow-root>
      </plmg-separator>
    `);
  });
  // it('incorrect prop passed in direction', async () => {
  //   const page = await newSpecPage({
  //     components: [Separator],
  //     html: `<plmg-separator direction="diagonal"></plmg-separator>`,
  //   });
  //   expect(page.root).toEqualHtml(`
  //     <plmg-separator direction="diagonal">
  //       <mock:shadow-root>
  //           <hr class="horizontal plmg-separator thin" style="background-color: inherit"/>
  //       </mock:shadow-root>
  //     </plmg-separator>
  //   `);
  // });
});
