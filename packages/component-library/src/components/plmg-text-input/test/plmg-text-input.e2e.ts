import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-text-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plmg-text-input label="label"></plmg-text-input>');

    const element = await page.find('plmg-text-input');
    expect(element).toHaveClass('hydrated');
  });

  describe('all sizes', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const sizes = ['medium', 'large'];
      let htmlContent = '';
      sizes.forEach((sizeControl) => {
        htmlContent += `
    <plmg-text-input label='label name ${sizeControl}' size='${sizeControl}'>
    </plmg-text-input>
    `;
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

  describe('all error states', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const errors = [true, false];
      let htmlContent = '';
      errors.forEach((errorControl) => {
        htmlContent += `
    <plmg-text-input label='error ${errorControl}' error='${errorControl}' error-message="error">
    </plmg-text-input>
    `;
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

  describe('label visibilties', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const showLabels = [true, false];
      let htmlContent = '';
      showLabels.forEach((showLabel) => {
        htmlContent += `
    <plmg-text-input label='show-label ${showLabel}' show-label='${showLabel}'>
    </plmg-text-input>
    `;
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

  describe('tip text', () => {
    it('are accessible', async () => {
      const page = await newE2EPage();

      const tips = [true, false];
      let htmlContent = '';
      tips.forEach((tipTextControl) => {
        htmlContent += `
    <plmg-text-input label='tip ${tipTextControl}' tip-text='tip text'>
    </plmg-text-input>
    `;
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

  describe('required', () => {
    it('is accessible', async () => {
      const page = await newE2EPage();

      const required = [true, false];
      let htmlContent = '';
      required.forEach((requiredControl) => {
        htmlContent += `
    <plmg-text-input label='required ${requiredControl}' required=${requiredControl}>
    </plmg-text-input>
    `;
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

  describe('default filled', () => {
    it('is accessible', async () => {
      const page = await newE2EPage();

      const defaults = ['something', undefined];
      let htmlContent = '';
      defaults.forEach((defaultControl) => {
        htmlContent += `
      <plmg-text-input label='default ${defaultControl}' default-input=${defaultControl} >
      </plmg-text-input>
      `;
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
