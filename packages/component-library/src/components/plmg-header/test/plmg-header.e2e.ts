import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-header></plmg-header>');

    const element = await page.find('plmg-header');
    expect(element).toHaveClass('hydrated');
  });

  it('is accessible', async () => {
    const page = await newE2EPage();

    let htmlContent = `
<plmg-header sidebar-expanded="false">
</plmg-header>      
      `;

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
