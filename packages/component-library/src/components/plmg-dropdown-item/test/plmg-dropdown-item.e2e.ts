import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-dropdown-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-dropdown-item></plmg-dropdown-item>');

    const element = await page.find('plmg-dropdown-item');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = `
        <plmg-dropdown-item text="dropdown item"/>
        <plmg-dropdown-item icon="home" text="icon"/>
        <plmg-dropdown-item href='https://ducky.eco' rel='noopener noreferrer' target="'_blank'" text="dropdown item"/>
        `;

      await page.setContent('<main>' + htmlContent + '</main>');
      debugger;
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
});
