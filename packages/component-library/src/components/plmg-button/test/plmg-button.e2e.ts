import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-button></plmg-button>');

    const element = await page.find('plmg-button');

    expect(element).toHaveClass('hydrated');
  });

  describe('normal button', () => {
    it('is accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = `
<main>
    <plmg-button>Label</plmg-button>
    <plmg-button icon-left="home">Label</plmg-button>
    <plmg-button icon-right="home">Label</plmg-button>
</main>>
              `;
      await page.setContent(htmlContent);

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

  describe('link button', () => {
    it('is accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = `
<main>
    <plmg-button href="https://ducky.eco">Label</plmg-button>
    <plmg-button href="https://ducky.eco" icon-left="home">Label</plmg-button>
    <plmg-button href="https://ducky.eco" icon-right="home">Label</plmg-button>
</main>
              `;
      await page.setContent(htmlContent);

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

  describe('icon button', () => {
    it('is accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = `
<main>
    <plmg-button icon-center="image" label="example"/>
</main>>
              `;
      await page.setContent(htmlContent);

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
