import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-radio-button-group', () => {
  it('renders with string values', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<plmg-radio-button-group values='${JSON.stringify([
        'option a',
        'option b',
      ])}'></plmg-radio-button-group>`
    );

    const element = await page.find('plmg-radio-button-group');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const htmlContent = `
        <plmg-radio-button-group values='${JSON.stringify([
          'option 0',
          'option 1',
          'option 2',
        ])}' name="Formz" label="Buttonz"/>
        <plmg-radio-button-group values='${JSON.stringify([
          'option a',
          'option b',
          'option c',
        ])}' name="Formz" label="Buttonz" size="large"/>
        <plmg-radio-button-group values='${JSON.stringify([
          'option 4',
          'option 5',
          'option 6',
        ])}' name="Formz" label="Buttonz" error-message="oh no"/>
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
});
