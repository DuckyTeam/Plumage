import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-dropdown><plmg-avatar style="width: 48px" slot="trigger" size="medium" label="user-avatar"></plmg-avatar><div slot="menu"><plmg-dropdown-item icon="duck" text="Dropdown Item 1" href="https://ducky.eco" target="_blank"></plmg-dropdown-item><plmg-dropdown-item text="Dropdown Item 2" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item><plmg-separator style="padding: 8px 8px; color: #BFCBD1;"></plmg-separator><plmg-dropdown-item text="Dropdown Item 3" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item></div></plmg-dropdown>'
    );

    const element = await page.find('plmg-dropdown');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = `
        <plmg-dropdown><plmg-avatar style="width: 48px" slot="trigger" size="medium" label="user-avatar"></plmg-avatar><div slot="menu"><plmg-dropdown-item icon="duck" text="Dropdown Item 1" href="https://ducky.eco" target="_blank"></plmg-dropdown-item><plmg-dropdown-item text="Dropdown Item 2" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item><plmg-separator style="padding: 8px 8px; color: #BFCBD1;"></plmg-separator><plmg-dropdown-item text="Dropdown Item 3" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item></div></plmg-dropdown>
      `;
      await page.setContent('<main>' + htmlContent + '</main>');
      const plmgDropdown = await page.find('plmg-dropdown > plmg-avatar');
      await plmgDropdown.click();
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
