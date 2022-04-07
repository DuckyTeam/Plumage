import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-page-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-page-container></plmg-page-container>');

    const element = await page.find('plmg-page-container');
    expect(element).toHaveClass('hydrated');
  });

  it('is accessible', async () => {
    const page = await newE2EPage();

    let htmlContent = `
<plmg-page-container>
    <plmg-header slot="header"></plmg-header>
    <plmg-sidebar slot="sidebar" logo-src="https://storage.googleapis.com/ducky_static_assets/ducky_logo_horisontal_azur.png" logo-href="/">
      <plmg-sidebar-item text="Ducky homepage" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
      <plmg-sidebar-item text="Plumage homepage" href="https://plumage.ducky.eco/" target="_blank"></plmg-sidebar-item>
    </plmg-sidebar>
    <div slot="content" style="padding: 20px;">
        Hello world I'm the main content of the page
    </div>
</plmg-page-container>   
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
