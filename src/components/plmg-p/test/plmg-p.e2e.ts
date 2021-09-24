import { newE2EPage } from '@stencil/core/testing';

describe('plmg-p', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-p></plmg-p>');

    const element = await page.find('plmg-p');
    expect(element).toHaveClass('hydrated');
  });
});
