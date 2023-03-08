import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../plmg-button';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button text="Content"></plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button text="Content" style="width: fit-content;">
         <button class="filled medium plmg-button primary" type="button">Content
         </button>
      </plmg-button>
    `);
  });
  it('renders a button when no href is provided', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button text="Content"></plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button text="Content" style="width: fit-content;">
         <button class="filled medium plmg-button primary" type="button">
         Content
         </button>
      </plmg-button>
    `);
  });
  it('renders an anchor element when href is provided', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button href="https://www.ducky.eco" text="Content"></plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button href="https://www.ducky.eco" text="Content" style="width: fit-content;">
        <a class="filled medium plmg-button primary" href="https://www.ducky.eco">
        Content
        </a>
    </plmg-button>
    `);
  });
  it('renders a button with icons', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button icon-left="home" icon-right="home" icon-center="home" text="Content"></plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button icon-center="home" icon-left="home" icon-right="home" text="Content" style="width: fit-content;">
         <button class="filled icon-button medium plmg-button primary" type="button">
           <plmg-svg-icon class="icon-left" icon="home"></plmg-svg-icon>
           <plmg-svg-icon class="icon-center" icon="home"></plmg-svg-icon>
           Content
           <plmg-svg-icon class="icon-right" icon="home"></plmg-svg-icon>
         </button>

    `);
  });
  it('renders an Icon Button with aria-label', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button icon-center="home" label="test"/>`,
    });

    expect(page.root).toEqualHtml(`
    <plmg-button icon-center="home" label="test"style="width: fit-content;">
         <button aria-label="test" class="filled icon-button medium plmg-button primary" type="button">
           <plmg-svg-icon class="icon-center" icon="home"></plmg-svg-icon>
         </button>
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
           <button aria-label="test" class="filled full-width icon-button medium plmg-button primary" type="button">
             <plmg-svg-icon class="icon-center" icon="home"></plmg-svg-icon>
           </button>
        </plmg-button>
      `);
  });
});
