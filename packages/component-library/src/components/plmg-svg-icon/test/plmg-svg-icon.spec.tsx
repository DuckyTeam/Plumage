import { newSpecPage } from '@stencil/core/testing';
import { AbcIcon } from '../icons/plmg-abc-icon/plmg-abc-icon';

describe('plmg-svg-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AbcIcon],
      html: `<plmg-abc-icon></plmg-abc-icon>`,
    });

    expect(page.root).toBeTruthy();
  });
});
