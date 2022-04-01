import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-sidebar-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-sidebar-item></plmg-sidebar-item>');

    const element = await page.find('plmg-sidebar-item');
    expect(element).toHaveClass('hydrated');
  });

  describe('all possible variations', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const actives = [true, false];
      const expandeds = [true, false];
      const icons = ['', 'home'];
      const children = [
        [],
        [
          '<plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>',
          '<plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>',
        ],
      ];

      let htmlContent = '';
      actives.forEach((active) => {
        expandeds.forEach((expanded) => {
          icons.forEach((icon) => {
            children.forEach((child) => {
              htmlContent += `
<plmg-sidebar-item active="${active}" expanded="${expanded}" icon="${icon}" text="${
                child.length > 0 ? 'With children' : 'No children'
              } active=${active} expanded=${expanded} icon=${icon}" href="https://ducky.eco" target="_blank">
    ${child.join(' ')}
</plmg-sidebar-item>
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
