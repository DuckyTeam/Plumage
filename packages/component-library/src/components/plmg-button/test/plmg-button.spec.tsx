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
});
