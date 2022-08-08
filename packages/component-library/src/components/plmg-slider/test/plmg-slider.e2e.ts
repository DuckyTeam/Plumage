import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-slider', () => {
  it('renders the component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toHaveClass('hydrated');
  });
});

describe('sets the initial value', () => {
  it('sets the value to min if not default-value is set', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0');
  });
  it('sets the value if default value is within range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10" default-value="5"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '5');
  });
  it('sets the value to the min if not default-value is above the allowed range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10" default-value="10.001"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0');
  });
  it('does not set a default value below of the specified range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0.1, 9.99" default-value="-0.1"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0.1');
  });
  it('does not set a default value above of the specified range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0.1, 9.99" default-value="10.1"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0.1');
  });
});

describe('plmg-slider input range field', () => {
  it('renders the input range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>> input[type="range"]');
    expect(element).not.toBe(null);
  });
  it('sets the input range with the correct min and max values', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>> input[type="range"]');
    expect(element).toEqualAttribute('min', '0');
    expect(element).toEqualAttribute('max', '10');
  });
  it('does not set the input range with the correct min and max values', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>> input[type="range"]');
    expect(element).toEqualAttribute('min', '0');
    expect(element).toEqualAttribute('max', '10');
  });
});

describe('displays marks', () => {
  it('displays marks by default', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>>  .marks');
    expect(element).not.toBe(null);
  });
  it('displays does not display marks', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" marks="false" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>>  .marks');
    expect(element).toBe(null);
  });
});
