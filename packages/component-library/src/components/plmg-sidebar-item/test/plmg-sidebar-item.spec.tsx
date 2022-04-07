import { newSpecPage } from '@stencil/core/testing';
import { SidebarItem } from '../plmg-sidebar-item';

describe('plmg-sidebar-item', () => {
  it('renders an anchor element when no children are given', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<plmg-sidebar-item text="Spec test" href="https://ducky.eco" target="_blank" rel="noreferrer"></plmg-sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-sidebar-item text="Spec test" href="https://ducky.eco" target="_blank" rel="noreferrer">
        <mock:shadow-root>
          <a class="plmg-sidebar-item-container" title="Spec test" href="https://ducky.eco" target="_blank" rel="noreferrer">
            <span class="plmg-sidebar-item-content">Spec test</span>
          </a>
        </mock:shadow-root>
      </plmg-sidebar-item>
    `);
  });

  it('renders a DIV element when children are given', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `
<plmg-sidebar-item text="Spec test">
    <plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
</plmg-sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-sidebar-item text="Spec test">
        <mock:shadow-root>
          <div class="plmg-sidebar-item-top-container">
            <button class="plmg-sidebar-item-container" title="Spec test">
              <span class="plmg-sidebar-item-content">Spec test</span>
              <plmg-svg-icon class="plmg-sidebar-item-expand" icon="expandMore"></plmg-svg-icon>
            </button>
          </div>
        </mock:shadow-root>
        <plmg-sidebar-item href="https://ducky.eco" target="_blank" text="Level 2 item">
            <mock:shadow-root>
                <a class="plmg-sidebar-item-container plmg-sidebar-item-level-2" href="https://ducky.eco" target="_blank" title="Level 2 item">
                  <span class="plmg-sidebar-item-content">Level 2 item</span>
                </a>
            </mock:shadow-root>
        </plmg-sidebar-item>
      </plmg-sidebar-item>
    `);
  });

  it('renders with a slot when expanded is True', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `
<plmg-sidebar-item text="Spec test" expanded="true">
    <plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
</plmg-sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-sidebar-item text="Spec test" expanded="true">
        <mock:shadow-root>
          <div class="plmg-sidebar-item-top-container">
            <button class="plmg-sidebar-item-container" title="Spec test">
              <span class="plmg-sidebar-item-content">Spec test</span>
              <plmg-svg-icon class="plmg-sidebar-item-expand" icon="expandLess"></plmg-svg-icon>
            </button>
            <slot></slot>
          </div>
        </mock:shadow-root>
        <plmg-sidebar-item href="https://ducky.eco" target="_blank" text="Level 2 item">
            <mock:shadow-root>
                <a class="plmg-sidebar-item-container plmg-sidebar-item-level-2" href="https://ducky.eco" target="_blank" title="Level 2 item">
                  <span class="plmg-sidebar-item-content">Level 2 item</span>
                </a>
            </mock:shadow-root>
        </plmg-sidebar-item>
      </plmg-sidebar-item>
    `);
  });

  it('renders with an icon', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<plmg-sidebar-item text="Spec test" icon="home" href="https://ducky.eco" target="_blank" rel="noreferrer"></plmg-sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-sidebar-item text="Spec test" icon="home" href="https://ducky.eco" target="_blank" rel="noreferrer">
        <mock:shadow-root>
          <a class="plmg-sidebar-item-container" title="Spec test" href="https://ducky.eco" target="_blank" rel="noreferrer">
            <plmg-svg-icon class="plmg-sidebar-item-icon" icon="home"></plmg-svg-icon>
            <span class="plmg-sidebar-item-content">Spec test</span>
          </a>
        </mock:shadow-root>
      </plmg-sidebar-item>
    `);
  });

  it('renders with active state', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<plmg-sidebar-item text="Spec test" active="true" href="https://ducky.eco" target="_blank" rel="noreferrer"></plmg-sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <plmg-sidebar-item text="Spec test" active="true" href="https://ducky.eco" target="_blank" rel="noreferrer">
        <mock:shadow-root>
          <a class="plmg-sidebar-item-container plmg-sidebar-item-active" title="Spec test" href="https://ducky.eco" target="_blank" rel="noreferrer">
            <span class="plmg-sidebar-item-content">Spec test</span>
          </a>
        </mock:shadow-root>
      </plmg-sidebar-item>
    `);
  });
});
