import { newSpecPage } from '@stencil/core/testing';
import { SvgIcon } from '../plmg-svg-icon';

describe('plmg-svg-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvgIcon],
      html: `<plmg-svg-icon size="1em" icon="adb"></plmg-svg-icon>`,
    });

    expect(page.root).toBeTruthy();
  });
});
