import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from '../plmg-avatar';

describe('plmg-avatar', () => {
  it('renders with default icon', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<plmg-avatar size="medium"></plmg-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-avatar size="medium">
        <mock:shadow-root>
        <div tabindex="-1" role="img" class="plmg-avatar medium">
          <plmg-svg-icon icon="personOutline">
          </plmg-svg-icon>
        </div> 
        </mock:shadow-root>
      </plmg-avatar>
    `);
  });
  it('renders deleted', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<plmg-avatar size="medium" user-deleted></plmg-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-avatar user-deleted size="medium">
        <mock:shadow-root>
        <div tabindex="-1" role="img" class="plmg-avatar medium">
          <plmg-svg-icon icon="personOff">
          </plmg-svg-icon>
        </div> 
        </mock:shadow-root>
      </plmg-avatar>
    `);
  });
  it('renders with an image', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<plmg-avatar size="medium" image-url="https://static.ducky.eco/icons/maskable_icon_192.png"></plmg-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-avatar image-url="https://static.ducky.eco/icons/maskable_icon_192.png" size="medium">
        <mock:shadow-root>
        <div class="medium plmg-avatar" role="img" tabindex="-1">
          <img alt="" class="plmg-avatar-image" src="https://static.ducky.eco/icons/maskable_icon_192.png"/>
        </div> 
        </mock:shadow-root>
      </plmg-avatar>
    `);
  });
  it('renders as interactive', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<plmg-avatar size="medium" interactive image-url="https://static.ducky.eco/icons/maskable_icon_192.png"></plmg-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-avatar interactive image-url="https://static.ducky.eco/icons/maskable_icon_192.png" size="medium">
        <mock:shadow-root>
        <div class="medium plmg-avatar" role="button" tabindex="0">
          <img alt="" class="plmg-avatar-image" src="https://static.ducky.eco/icons/maskable_icon_192.png"/>
        </div> 
        </mock:shadow-root>
      </plmg-avatar>
    `);
  });
  it('renders userDeleted icon if userDeleted is true and an image url exists', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<plmg-avatar size="medium" user-deleted image-url="https://static.ducky.eco/icons/maskable_icon_192.png"></plmg-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-avatar user-deleted image-url="https://static.ducky.eco/icons/maskable_icon_192.png" size="medium">
        <mock:shadow-root>
        <div class="medium plmg-avatar" role="img" tabindex="-1">
          <plmg-svg-icon icon="personOff">
          </plmg-svg-icon>
        </div> 
        </mock:shadow-root>
      </plmg-avatar>
    `);
  });
});
