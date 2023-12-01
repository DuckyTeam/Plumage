import { newSpecPage } from '@stencil/core/testing';
import { Card } from '../plmg-card';

describe('plmg-card', () => {
  it('renders empty when nothing passed', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<plmg-card></plmg-card>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card>
        <mock:shadow-root>
        <div class="plmg-card" style="width: fit-content;">
           <div class="plmg-card-content-area">
             <slot name="slot-1"></slot>
             <slot name="slot-2"></slot>
           </div>
         </div>
        </mock:shadow-root>
      </plmg-card>
    `);
  });

  it('renders a card at full width with header text & icon, footer with button and slots 1 & 2', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
<plmg-card 
    header-text="Hello world" 
    bottom-action-text="Action" 
    top-action-icon="home"
    full-width="true"
    top-action-label="card top action">
        <div slot="slot-1">Slot 1</div>
        <div slot="slot-2">Slot 2</div>
</plmg-card>
`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card header-text="Hello world" bottom-action-text="Action" full-width="true" top-action-icon="home" top-action-label="card top action">
        <mock:shadow-root>
        <div class="plmg-card" style="width: 100%;">
            <div class="plmg-card-header">
                <span>Hello world</span>
                <plmg-button
                  design="borderless"
                  size="small"
                  color="primary"
                  icon-center="home"
                  label="card top action"
              />
            </div>
           <div class="plmg-card-content-area with-header with-footer">
             <slot name="slot-1"></slot>
             <slot name="slot-2"></slot>
           </div>
           <div class="plmg-card-footer">
            <plmg-button
              design="borderless"
              size="small"
              color="primary"
              text="Action"
            >
            </plmg-button>
           </div>
         </div>
        </mock:shadow-root>
        <div slot="slot-1">
            Slot 1
        </div>
        <div slot="slot-2">
          Slot 2
        </div>
      </plmg-card>
    `);
  });

  it('renders a card with header when a header text is given', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
<plmg-card 
    header-text="Hello world">
</plmg-card>
`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card header-text="Hello world">
        <mock:shadow-root>
        <div class="plmg-card" style="width: fit-content;">
            <div class="plmg-card-header">
                <span>Hello world</span>
            </div>
           <div class="plmg-card-content-area with-header">
             <slot name="slot-1"></slot>
             <slot name="slot-2"></slot>
           </div>
         </div>
        </mock:shadow-root>
      </plmg-card>
    `);
  });

  it('renders a card with header when a header icon is given', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
<plmg-card 
    top-action-icon="home" 
    top-action-label="card top action">
</plmg-card>
`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card top-action-icon="home" top-action-label="card top action">
        <mock:shadow-root>
        <div class="plmg-card" style="width: fit-content;">
            <div class="plmg-card-header">
                <span></span>
                <plmg-button
                  design="borderless"
                  size="small"
                  color="primary"
                  icon-center="home"
                  label="card top action"
              />
            </div>
           <div class="plmg-card-content-area with-header">
             <slot name="slot-1"></slot>
             <slot name="slot-2"></slot>
           </div>
         </div>
        </mock:shadow-root>
      </plmg-card>
    `);
  });

  it('renders a card with footer when bottom action text is given', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
<plmg-card 
    bottom-action-text="Action">
</plmg-card>
`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card bottom-action-text="Action">
        <mock:shadow-root>
        <div class="plmg-card" style="width: fit-content;">
           <div class="plmg-card-content-area with-footer">
             <slot name="slot-1"></slot>
             <slot name="slot-2"></slot>
           </div>
           <div class="plmg-card-footer">
            <plmg-button
              design="borderless"
              size="small"
              color="primary"
              text="Action"
            >
            </plmg-button>
           </div>
         </div>
        </mock:shadow-root>
      </plmg-card>
    `);
  });

  it('renders a card with slot 1, when given', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
<plmg-card >
        <div slot="slot-1">Slot 1</div>
</plmg-card>
`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card>
        <mock:shadow-root>
        <div class="plmg-card" style="width: fit-content;">
           <div class="plmg-card-content-area">
             <slot name="slot-1"></slot>
             <slot name="slot-2"></slot>
           </div>
         </div>
        </mock:shadow-root>
        <div slot="slot-1">
            Slot 1
        </div>
      </plmg-card>
    `);
  });

  it('renders a card with slot 2, when given', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
<plmg-card >
        <div slot="slot-2">Slot 2</div>
</plmg-card>
`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-card>
        <mock:shadow-root>
        <div class="plmg-card" style="width: fit-content;">
           <div class="plmg-card-content-area">
             <slot name="slot-1"></slot>
             <slot name="slot-2"></slot>
           </div>
         </div>
        </mock:shadow-root>
        <div slot="slot-2">
            Slot 2
        </div>
      </plmg-card>
    `);
  });
});
