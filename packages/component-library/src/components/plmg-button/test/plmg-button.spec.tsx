import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../plmg-button';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button>Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-button>
          <button class="filled medium plmg-button primary" type="button">Content</button>
      </plmg-button>
    `);
  });
  it('renders a button when no href is provided', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button>Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-button>
          <button class="filled medium plmg-button primary" type="button">Content</button>
      </plmg-button>
    `);
  });
  it('renders a anchor element when href is provided', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button href="https://www.ducky.eco">Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
      <plmg-button href="https://www.ducky.eco">
          <a class="filled medium plmg-button primary" href="https://www.ducky.eco">Content</a>
      </plmg-button>
    `);
  });
  it('renders a button with icons', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button icon-left="home" icon-right="home" icon-center="home">Content</plmg-button>`,
    });

    expect(page.root).toEqualHtml(`
       <plmg-button icon-center="home" icon-left="home" icon-right="home">
          <button class="filled icon-button medium plmg-button primary" type="button">
            <plmg-svg-icon class="icon-left" icon="home"></plmg-svg-icon>
            <plmg-svg-icon class="icon-center" icon="home"></plmg-svg-icon>
            Content
            <plmg-svg-icon class="icon-right" icon="home"></plmg-svg-icon>
          </button>
      </plmg-button>
    `);
  });
  it('renders an Icon Button with aria-label', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<plmg-button icon-center="home" label="test"/>`,
    });

    expect(page.root).toEqualHtml(`
       <plmg-button icon-center="home" label="test">
          <button class="filled icon-button medium plmg-button primary" type="button" aria-label="test">
            <plmg-svg-icon class="icon-center" icon="home"></plmg-svg-icon>
          </button>
      </plmg-button>
    `);
  });
});
