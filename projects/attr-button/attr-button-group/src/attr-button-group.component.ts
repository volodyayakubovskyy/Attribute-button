import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'attr-button-group',
  exportAs: 'attrButtonGroup',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AttrButtonGroupComponent {
  @HostBinding('class') class = 'attr-button-group';
}
