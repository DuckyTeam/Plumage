import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../plmg-button';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button>Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button style="width: fit-content;">
       <mock:shadow-root>
         <button class="filled medium plmg-button primary" type="button">
           <slot></slot>
         </button>
       </mock:shadow-root>
       Content
      </plmg-button>
    `);
  });
  it('renders a button when no href is provided', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button>Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button style="width: fit-content;">
       <mock:shadow-root>
         <button class="filled medium plmg-button primary" type="button">
           <slot></slot>
         </button>
       </mock:shadow-root>
       Content
      </plmg-button>
    `);
  });
  it('renders a anchor element when href is provided', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button href="https://www.ducky.eco">Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button href="https://www.ducky.eco" style="width: fit-content;">
      <mock:shadow-root>
        <a class="filled medium plmg-button primary" href="https://www.ducky.eco">
          <slot></slot>
        </a>
      </mock:shadow-root>
      Content
    </plmg-button>
    `);
  });
  it('renders a button with icons', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button icon-left="home" icon-right="home" icon-center="home">Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button icon-center="home" icon-left="home" icon-right="home" style="width: fit-content;">
       <mock:shadow-root>
         <button class="filled icon-button medium plmg-button primary" type="button">
           <plmg-svg-icon class="icon-left" icon="home"></plmg-svg-icon>
           <plmg-svg-icon class="icon-center" icon="home"></plmg-svg-icon>
           <slot></slot>
           <plmg-svg-icon class="icon-right" icon="home"></plmg-svg-icon>
         </button>
       </mock:shadow-root>
       Content

    `);
  });
  it('renders an Icon Button with aria-label', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button icon-center="home" label="test"/>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button icon-center="home" label="test" style="width: fit-content;">
       <mock:shadow-root>
         <button aria-label="test" class="filled icon-button medium plmg-button primary" type="button">
           <plmg-svg-icon class="icon-center" icon="home"></plmg-svg-icon>
           <slot></slot>
         </button>
       </mock:shadow-root>
      </plmg-button>

    `);
  });
  it('renders full width', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button full-width="true" icon-center="home" label="test"/>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-button full-width="true" icon-center="home" label="test" style="width: full-width;">
         <mock:shadow-root>
           <button aria-label="test" class="filled full-width icon-button medium plmg-button primary" type="button">
             <plmg-svg-icon class="icon-center" icon="home"></plmg-svg-icon>
             <slot></slot>
           </button>
         </mock:shadow-root>
        </plmg-button>
      `);
  });
});
