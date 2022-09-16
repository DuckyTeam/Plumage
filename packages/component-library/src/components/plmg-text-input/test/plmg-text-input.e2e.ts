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

  it('all sizes are accessible', async () => {
    const page = await newE2EPage();

    const sizes = ['medium', 'large'];

    let htmlContent = '';
    sizes.forEach((sizeControl) => {
      htmlContent += `
  <plmg-text-input label='label name ${sizeControl}' size=${sizeControl}>
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

  it('error state is accessible', async () => {
    const page = await newE2EPage();

    const htmlContent = `
      <plmg-text-input label='error' error-message='error'>
      </plmg-text-input>
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

  it('label visibilties are accessible', async () => {
    const page = await newE2EPage();

    const showLabels = [true, false];

    let htmlContent = '';
    showLabels.forEach((showLabel) => {
      htmlContent += `
  <plmg-text-input label='show-label ${showLabel}' show-label=${showLabel}>
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

  it('tip text is accessible', async () => {
    const page = await newE2EPage();

    const htmlContent = `
      <plmg-text-input label='tip' tip-text='tip text'>
      </plmg-text-input>
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

  it('required is accessible', async () => {
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
  it('disabled is accessible', async () => {
    const page = await newE2EPage();

    const isDisabled = [true, false];
    let htmlContent = '';
    isDisabled.forEach((disabled) => {
      htmlContent += `
    <plmg-text-input label='disabled ${disabled}' disabled={${disabled}}>
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
  it('readonly is accessible', async () => {
    const page = await newE2EPage();

    const isReadonly = [true, false];
    let htmlContent = '';
    isReadonly.forEach((readonly) => {
      htmlContent += `
    <plmg-text-input label='readonly ${readonly}' readonly={${readonly}}>
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

describe('value attribute', () => {
  it('sets the text input value', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-text-input label="text-input" value="your value"></plmg-text-input>'
    );
    const component = await page.find('plmg-text-input');
    const inputFieldElement = await page.find('input[type="text"]');
    expect(await component.getProperty('value')).toEqual('your value');
    expect(await inputFieldElement.getProperty('value')).toEqual('your value');
  });
  it('is updated after user input', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-text-input label="text-input" value="initial text"></plmg-text-input>'
    );
    const component = await page.find('plmg-text-input');
    const inputFieldElement = await page.find('input[type="text"]');
    expect(await component.getProperty('value')).toEqual('initial text');
    expect(await inputFieldElement.getProperty('value')).toEqual(
      'initial text'
    );
    await inputFieldElement.type(` additional text`);
    await inputFieldElement.press('Enter');
    await page.waitForChanges();
    expect(await inputFieldElement.getProperty('value')).toEqual(
      'initial text additional text'
    );
  });
});
