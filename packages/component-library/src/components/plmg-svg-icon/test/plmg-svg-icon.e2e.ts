import { newE2EPage } from '@stencil/core/testing';

describe('plmg-svg-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-svg-icon icon="abc"></plmg-svg-icon>');

    const element = await page.find('plmg-svg-icon');
    expect(element).toHaveClass('hydrated');
  });
});
