import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values"0, 10"></plmg-slider>'
    );

    const element = await page.find('plmg-slider');

    expect(element).toHaveClass('hydrated');
  });

  it('default slider is accessible', async () => {
    const page = await newE2EPage();

    const htmlContent = `<plmg-slider name='Range Slider' range='0, 100'></plmg-slider>`;

    await page.setContent('<main>' + htmlContent + '</main>');

    const results = await new AxePuppeteer(page as unknown as Page)
      .disableRules([
        'document-title',
        'html-has-lang',
        'landmark-one-main',
        'page-has-heading-one',
      ])
      .analyze();

    expect(results.violations).toHaveLength(0);
  });
});
