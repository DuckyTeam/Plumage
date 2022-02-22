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
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-button>Click me</plmg-button>');

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
