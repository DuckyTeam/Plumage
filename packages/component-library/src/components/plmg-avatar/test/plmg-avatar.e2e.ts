import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-avatar></plmg-avatar>');

    const element = await page.find('plmg-avatar');
    expect(element).toHaveClass('hydrated');
  });

  describe('all controls', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const sizes = ['small', 'medium', 'large', 'extra-large'];
      const userDeleted = [true, false];
      const interactives = [true, false];

      let htmlContent = '';
      sizes.forEach((size) => {
        interactives.forEach((interactive) => {
          userDeleted.forEach((deleted) => {
            htmlContent += `
    <plmg-avatar size=${size} interactive=${interactive} label="user avatar" userDeleted="${deleted}">
    </plmg-avatar>
<br/>
    `;
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
  describe('with image', () => {
    it('is accessible', async () => {
      const page = await newE2EPage();

      const htmlContent = `<plmg-avatar label="user avatar" image-url="https://static.ducky.eco/icons/maskable_icon_192.png" size="medium" >
    </plmg-avatar>`;

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
  describe('avatar interactivity', () => {
    it('clicking avatar triggers an event', async () => {
      const page = await newE2EPage();
      const htmlContent = `<plmg-avatar label="user avatar" interactive image-url="https://static.ducky.eco/icons/maskable_icon_192.png" size="medium" >
    </plmg-avatar>`;

      await page.setContent('<main>' + htmlContent + '</main>');

      const element = await page.find('plmg-avatar >>> div');

      const avatarClickedSpy = await page.spyOnEvent('avatarClick');

      await element.click();

      await page.waitForChanges();

      expect(avatarClickedSpy).toHaveReceivedEvent();
    });
    it('does not fire click on non-interactive', async () => {
      const page = await newE2EPage();
      const htmlContent = `<plmg-avatar label="user avatar" image-url="https://static.ducky.eco/icons/maskable_icon_192.png" size="medium" >
    </plmg-avatar>`;

      await page.setContent('<main>' + htmlContent + '</main>');

      const element = await page.find('plmg-avatar >>> div');

      const avatarClickedSpy = await page.spyOnEvent('avatarClick');

      await element.click();

      await page.waitForChanges();

      expect(avatarClickedSpy).not.toHaveReceivedEvent();
    });
  });
  describe('displays colors', () => {
    it('correctly displays background color', async () => {
      const page = await newE2EPage();
      const htmlContent = `<plmg-avatar label="user avatar" background-color="pink" interactive size="medium" >
      </plmg-avatar>`;

      await page.setContent('<main>' + htmlContent + '</main>');

      const element = await page.find('plmg-avatar >>> div');
      const styles = await element.getComputedStyle();
      expect(styles['background-color']).toEqual('rgb(255, 192, 203)');
    });
    it('does not apply a background color image url is present', async () => {
      const page = await newE2EPage();
      const htmlContent = `<plmg-avatar label="user avatar" image-url="https://static.ducky.eco/icons/maskable_icon_192.png" background-color="#fff" size="medium" >
      </plmg-avatar>`;

      await page.setContent('<main>' + htmlContent + '</main>');

      const element = await page.find('plmg-avatar >>> div');
      const styles = await element.getComputedStyle();
      expect(styles['background-color']).toEqual('rgba(0, 0, 0, 0)');
    });
  });
});
