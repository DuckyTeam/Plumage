import { newE2EPage } from '@stencil/core/testing';
describe('plmg-slider', () => {
  it('renders the component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the input range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>> input[type="range"]');
    expect(element).not.toBe(null);
  });
});

describe('text input width prop', () => {
  it('accepts a positive number to set the text input container width', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" text-input-width="100" range="0, 10"></plmg-slider>'
    );
    const element = await page.find(
      'plmg-slider >>> .plmg-slider-input-field-container'
    );
    const style = await element.getComputedStyle();
    expect(style.width).toBe('100px');
  });
  it('accepts a fractional value to set the text input container width', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" text-input-width="100.5" range="0, 10"></plmg-slider>'
    );
    const element = await page.find(
      'plmg-slider >>> .plmg-slider-input-field-container'
    );
    const style = await element.getComputedStyle();
    expect(style.width).toBe('100.5px');
  });
  it('does not accept a negative value', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" text-input-width="-1" range="0, 10"></plmg-slider>'
    );
    const element = await page.find(
      'plmg-slider >>> .plmg-slider-input-field-container'
    );
    const style = await element.getComputedStyle();
    expect(style.width).not.toBe('-1px');
  });
});

describe('plmg-slider range values are', () => {
  it('set to min and max values', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0.1, 100.31"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>> input[type="range"]');
    expect(element).toEqualAttribute('min', '0.1');
    expect(element).toEqualAttribute('max', '100.31');
  });
});

describe('plmg-slider initial value is set to', () => {
  it('the value passed to the default prop if it is within range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10" default="5"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '5');
  });

  it('to the min value if default prop is above the allowed range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10" default="10.001"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0');
  });

  it('to to the min value if the default prop is below the allowed range', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0.1, 9.99" default="-0.1"></plmg-slider>'
    );
    const element = await page.find('plmg-slider');
    expect(element).toEqualAttribute('value', '0.1');
  });
});

describe('plmg-slider conditionally displays marks', () => {
  it('displays marks by default', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>>  .marks');
    expect(element).not.toBe(null);
  });

  it('does not display marks when marks props value is false', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" marks="false" range="0, 10"></plmg-slider>'
    );
    const element = await page.find('plmg-slider >>>  .marks');
    expect(element).toBe(null);
  });
});

describe('plmg-slider re-renders when props change', () => {
  it('adds the thumb label', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10"></plmg-slider>'
    );
    const props = {
      thumbLabel: true,
    };
    await page.$eval(
      'plmg-slider',
      (elm: any, thumbLabel) => {
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
      '<plmg-slider name="Range Slider" range="0, 10"></plmg-slider>'
    );
    const props = {
      marks: false,
    };
    await page.$eval(
      'plmg-slider',
      (elm: any, marks) => {
        elm.marks = marks;
      },
      props
    );
    await page.waitForChanges();
    expect(await page.find('plmg-slider >>> .plmg.marks')).toBe(null);
  });
});

describe('number field inputs', () => {
  it('set the slider value when input is value', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10"></plmg-slider>'
    );
    const inputRange = await page.find('plmg-slider');
    const inputFieldElement = await page.find(
      'plmg-slider >>> input[type="number"]'
    );
    await inputFieldElement.type(`${10}`);
    await inputFieldElement.press('Enter');
    await page.waitForChanges();
    expect(inputRange).toEqualAttribute('value', '10');
  });

  it('does not change the slider value if invald', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10"></plmg-slider>'
    );
    const inputRange = await page.find('plmg-slider');
    const inputFieldElement = await page.find(
      'plmg-slider >>> input[type="number"]'
    );
    await inputFieldElement.type(' ');
    await inputFieldElement.press('Enter');
    await page.waitForChanges();
    expect(inputRange).toEqualAttribute('value', '0');
  });

  it('set slider value to the closest valid value', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10" step="1"></plmg-slider>'
    );
    const inputRange = await page.find('plmg-slider');
    const inputFieldElement = await page.find(
      'plmg-slider >>> input[type="number"]'
    );
    await inputFieldElement.type(`${0.99}`);
    await inputFieldElement.press('Enter');
    await page.waitForChanges();
    expect(inputRange).toEqualAttribute('value', '1');
  });

  it('increments the slider value when up arrow is pressed', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range="0, 10" step="1"></plmg-slider>'
    );
    const inputRange = await page.find('plmg-slider');
    const inputFieldElement = await page.find(
      'plmg-slider >>> input[type="number"]'
    );
    await inputFieldElement.press('ArrowUp');
    await page.waitForChanges();
    expect(inputRange).toEqualAttribute('value', '1');
  });

  it('decremented with the slider when down arrow is pressed', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" default="5" range="0, 10" step="1"></plmg-slider>'
    );
    const inputRange = await page.find('plmg-slider');
    const inputFieldElement = await page.find(
      'plmg-slider >>> input[type="number"]'
    );
    await inputFieldElement.press('ArrowDown');
    await page.waitForChanges();
    expect(inputRange).toEqualAttribute('value', '4');
  });
});
