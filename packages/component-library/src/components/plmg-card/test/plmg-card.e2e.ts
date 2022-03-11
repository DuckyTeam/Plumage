import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-card></plmg-card>');

    const element = await page.find('plmg-card');

    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const headerTexts = ['Something', null];
      const bottomButtonActions = [() => {}, null];

      let htmlContent = '';
      headerTexts.forEach((headerText) => {
        bottomButtonActions.forEach((bottomButtonAction) => {
          htmlContent += `
          <plmg-card headerText="${headerText}" bottomButtonAction="${bottomButtonAction}" bottomButtonText="Action" >
          </plmg-card>
          <br/>
                        `;
        });
      });

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
