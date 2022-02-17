import { newE2EPage } from '@stencil/core/testing';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-button></plmg-button>');

    const element = await page.find('plmg-button');
    expect(element).toHaveClass('hydrated');
  });
});
