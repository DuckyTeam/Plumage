import {
  Component,
  Element,
  State,
  Prop,
  h,
  Watch,
  Build,
} from '@stencil/core';
import { fetchIcon } from './utils';

@Component({
  assetsDirs: ['assets'],
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
    if (
      !Build.isBrowser ||
      typeof window === 'undefined' ||
      !(window as any).IntersectionObserver
    ) {
      callback();
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
            callback();
          }
        });
      },
      { rootMargin: '50px' }
    );

    this.intersectionObserver.observe(this.el);
  }
}
