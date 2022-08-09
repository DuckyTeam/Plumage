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
  it('renders the input range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>> input[type="range"]');
    expect(element).not.toBe(null);
  });
});

describe('sets the range and initial valuess', () => {
  it('sets min and max values', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0.1, 100.31"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>> input[type="range"]');
    expect(element).toEqualAttribute('min', '0.1');
    expect(element).toEqualAttribute('max', '100.31');
  });
  it('sets the value to min if not default-value is set', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0');
  });
  it('sets the inital value if default value is within range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10" default-value="5"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '5');
  });
  it('sets the value to the min if default value prop is above the allowed range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10" default-value="10.001"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0');
  });
  it('set the value to the min if the default value prop is below the allowed range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0.1, 9.99" default-value="-0.1"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0.1');
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

describe('re-renders when props change', () => {
  it('adds the thumb label', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const props = {
      thumbLabel: true,
    };
    await page.$eval(
      'plmg-slider',
      (elm: any, { thumbLabel }) => {
        elm.thumbLabel = thumbLabel;
      },
      props
    );
    await page.waitForChanges();
    expect(
      await page.find('plmg-slider >>> .plmg-slider-thumb-label')
    ).not.toBe(null);
  });
  it('removes marks', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const props = {
      marks: false,
    };
    await page.$eval(
      'plmg-slider',
      (elm: any, { marks }) => {
        elm.marks = marks;
      },
      props
    );
    await page.waitForChanges();
    expect(await page.find('plmg-slider >>> .plmg.marks')).toBe(null);
  });
});

describe('updates the value', () => {
  it('when the user enters a valid value', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const inputRange = await page.find('plmg-slider');
    const element = await page.find('plmg-slider >>> input[type="number"]');
    await element.type(`${10}`);
    await page.waitForChanges();
    expect(inputRange).toEqualAttribute('value', '10');
  });
  it('rejects an invalid value', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values="0, 10"></plmg-slider>'
    );
    const inputRange = await page.find('plmg-slider');
    const element = await page.find('plmg-slider >>> input[type="number"]');
    await element.type(`${-1}`);
    await page.waitForChanges();
    expect(inputRange).toEqualAttribute('value', '0');
  });
});
