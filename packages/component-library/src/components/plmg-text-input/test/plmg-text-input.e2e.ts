import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-text-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-text-input></plmg-text-input>');

    const element = await page.find('plmg-text-input');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const sizes = ['medium', 'large', undefined];
      const errors = [true, false, undefined];
      const filled = [true, false, undefined];
      const labelVisibles = [true, false, undefined];
      const tips = [true, false, undefined];

      let htmlContent = '';
      sizes.forEach((sizeControl) => {
        errors.forEach((error) => {
          filled.forEach((fill) => {
            labelVisibles.forEach((labelVisible) => {
              tips.forEach((tip) => {
                htmlContent += `
    <plmg-text-input size="${sizeControl}" tip=${tip} label-visible=${labelVisible} fill=${fill} errors=${error}>
    </plmg-text-input>
<br/>
    `;
              });
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
