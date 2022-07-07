import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';
import { Page } from 'puppeteer';

describe('plmg-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<plmg-slider name="Range Slider" range-values"0, 10"></plmg-slider>'
    );

    const element = await page.find('plmg-slider');

    // console.log(element);
    expect(element).toHaveClass('hydrated');
  });

  describe('default', () => {
    it('is accessible', async () => {
      const page = await newE2EPage();

      let htmlContent = '';
      htmlContent += `
        <plmg-slider name='Range Slider' range='0, 100'>
        </plmg-slider>
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
});

// describe('all possible variations', () => {
//   it('are accessible', async () => {
//     const page = await newE2EPage();

//     const marks = [true, false];
//     const thumbLabel = [true, false];

//     let htmlContent = '';
//     marks.forEach((mark) => {
//       thumbLabel.forEach((thumb) => {
//         htmlContent += `
//           <plmg-slider name='slider ${mark} ${thumb}' range='0, 100' marks=${mark} thumb-label=${thumb}>
//           </plmg-slider>
//           <br/>
//           `;
//       });
//     });
//     await page.setContent('<main>' + htmlContent + '</main>');

//     const results = await new AxePuppeteer(page as unknown as Page)
//       .disableRules([
//         'document-title',
//         'html-has-lang',
//         'landmark-one-main',
//         'page-has-heading-one',
//       ])
//       .analyze();

//     expect(results.violations).toHaveLength(0);
//   });
// });
