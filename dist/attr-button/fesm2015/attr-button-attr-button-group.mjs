import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, HostBinding, NgModule } from '@angular/core';

class AttrButtonGroupComponent {
    constructor() {
        this.class = 'attr-button-group';
    }
}
AttrButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AttrButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: AttrButtonGroupComponent, selector: "attr-button-group", host: { properties: { "class": "this.class" } }, exportAs: ["attrButtonGroup"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'attr-button-group',
                    exportAs: 'attrButtonGroup',
                    template: '<ng-content></ng-content>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { class: [{
                type: HostBinding,
                args: ['class']
            }] } });

class AttrButtonGroupModule {
}
AttrButtonGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AttrButtonGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonGroupModule, declarations: [AttrButtonGroupComponent], exports: [AttrButtonGroupComponent] });
AttrButtonGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonGroupModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AttrButtonGroupComponent
                    ],
                    imports: [],
                    exports: [
                        AttrButtonGroupComponent
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AttrButtonGroupComponent, AttrButtonGroupModule };
//# sourceMappingURL=attr-button-attr-button-group.mjs.map
