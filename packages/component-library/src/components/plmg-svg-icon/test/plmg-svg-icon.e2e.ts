import { newE2EPage } from '@stencil/core/testing';

describe('plmg-svg-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-abc-icon></plmg-abc-icon>');

    const element = await page.find('plmg-abc-icon');
    expect(element).toHaveClass('hydrated');
  });
});
