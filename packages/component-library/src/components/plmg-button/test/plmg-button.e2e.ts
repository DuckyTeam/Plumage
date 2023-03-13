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
    <plmg-button text="Label"></plmg-button>
    <plmg-button icon-left="home" text="Label"></plmg-button>
    <plmg-button icon-right="home" text="Label"></plmg-button>
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
    <plmg-button href="https://ducky.eco" text="Label"></plmg-button>
    <plmg-button href="https://ducky.eco" icon-left="home" text="Label"></plmg-button>
    <plmg-button href="https://ducky.eco" icon-right="home" text="Label"></plmg-button>
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
  describe('button type triggers expected event', () => {
    it('as a button', async () => {
      const page = await newE2EPage();
      const htmlContent = `<plmg-button label="example" />`;

      await page.setContent('<main>' + htmlContent + '</main>');

      const element = await page.find('plmg-button');

      const buttonClickedSpy = await page.spyOnEvent('click');

      await element.click();

      await page.waitForChanges();

      expect(buttonClickedSpy).toHaveReceivedEvent();
    });
    it('as submit', async () => {
      const page = await newE2EPage();
      const htmlContent = `
      <form>
        <plmg-button label="example" type="submit"/>
      </form>`;

      await page.setContent('<main>' + htmlContent + '</main>');

      const element = await page.find('plmg-button');

      const buttonClickedSpy = await page.spyOnEvent('submit');

      await element.click();

      await page.waitForChanges();

      expect(buttonClickedSpy).toHaveReceivedEvent();
    });
    it('as reset', async () => {
      const page = await newE2EPage();
      const htmlContent = `
      <form>
        <plmg-button label="example" type="reset"/>
      </form>`;

      await page.setContent('<main>' + htmlContent + '</main>');

      const element = await page.find('plmg-button');

      const buttonClickedSpy = await page.spyOnEvent('reset');

      await element.click();

      await page.waitForChanges();

      expect(buttonClickedSpy).toHaveReceivedEvent();
    });
    it('is disabled', async () => {
      const page = await newE2EPage();
      const htmlContent = `
      <form>
        <plmg-button label="example" type="submit" disabled/>
      </form>`;

      await page.setContent('<main>' + htmlContent + '</main>');

      const element = await page.find('plmg-button');

      const buttonClickedSpy = await page.spyOnEvent('submit');

      await element.click();

      await page.waitForChanges();

      expect(buttonClickedSpy).toHaveReceivedEventTimes(0);
    });
  });
});
