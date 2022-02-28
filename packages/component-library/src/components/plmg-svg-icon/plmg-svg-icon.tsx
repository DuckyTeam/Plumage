import {
  Component,
  Element,
  State,
  Prop,
  h,
  Watch,
  Build,
} from '@stencil/core';
import { fetchIcon, supportsIntersectionObserver } from './utils';

@Component({
  tag: 'plmg-svg-icon',
  shadow: true,
})
export class SvgIcon {
  @Element() el: HTMLElement;
  @Prop() icon: string = null;
  @Prop() size: string = '1em';
  @State() private pathData: string;
  @State() private visible = false;
  private intersectionObserver: IntersectionObserver;

  // When connected to the DOM
  connectedCallback(): void {
    this.waitUntilVisible(async () => {
      this.visible = true;
      await this.loadIconPathData();
    });
  }

  // When removed from the DOM
  disconnectedCallback(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }
  }

  // When first added to the DOM
  async componentWillLoad(): Promise<void> {
    await this.loadIconPathData();
  }

  render() {
    return (
      <div
        innerHTML={this.pathData}
        style={{ height: '1em', width: '1em', fontSize: this.size }}
      />
    );
  }

  @Watch('icon')
  private async loadIconPathData(): Promise<void> {
    const { icon, visible } = this;

    if (!Build.isBrowser || !icon || !visible) {
      return;
    }

    this.pathData = await fetchIcon({ icon });
  }

  private waitUntilVisible(callback: () => void): void {
    if (!supportsIntersectionObserver) {
      callback();
      return;
    }

    // Create an intersection observer for this component. By default, the element to intersect with is the viewport
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        // Entry is every element we are observing, in our case, only this component
        entries.forEach((entry) => {
          // If the component is intersecting the viewport
          if (entry.isIntersecting) {
            // Stop listening for intersection, as we are already going to load the icon
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
            // Load the icon
            callback();
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Start observing when the component intersects within 50px of the viewport
    this.intersectionObserver.observe(this.el);
  }
}
