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

      const headerTexts = ['Something', undefined];
      const topActionIcons = ['home', ''];
      const bottomActionTexts = ['Action bottom', ''];
      const fullWidths = [true, false, undefined];

      let htmlContent = '';
      headerTexts.forEach((headerText) => {
        topActionIcons.forEach((topActionIcon) => {
          bottomActionTexts.forEach((bottomActionText) => {
            fullWidths.forEach((fullWidth) => {
              htmlContent += `
          <plmg-card header-text="${headerText}" full-width="${fullWidth}" bottom-action-text="${bottomActionText}" top-action-icon="${topActionIcon}" top-action-label="${topActionIcon}"></plmg-card>
          <br/>
                        `;
            });
          });
        });
      });

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
