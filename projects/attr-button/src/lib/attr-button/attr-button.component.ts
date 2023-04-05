import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

export type AttrButtonSize = 'default' | 'small';
export type AttrButtonColor = 'primary' | 'accent' | 'warn';


@Component({
  selector: 'button[attr-button], a[attr-button]',
  exportAs: 'attrButton',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AttrButtonComponent {
  @Input() size: AttrButtonSize = 'default';
  @Input() color: AttrButtonColor = 'primary';
  @Input() tabIndex: number | null = null;

  @HostBinding('disabled')
  @Input() disabled = false;

  @HostBinding('class')
  get classList(): string {
    let classes = ['attr-button'];
    switch (this.color) {
      case 'primary': {
        classes = [...classes, 'attr-button-primary'];
        break;
      }
      case 'accent': {
        classes = [...classes, 'attr-button-accent'];
        break;
      }
      case 'warn': {
        classes = [...classes, 'attr-button-warn'];
        break;
      }
    }

    if (this.size === 'small') {
      classes = [...classes, 'attr-button-small'];
    }

    return classes.join(' ');
  }

  @HostBinding('tabindex')
  get buttonTabIndex(): number | null {
    return this.disabled ? -1 : (this.tabIndex === null ? null : this.tabIndex);
  }
}
