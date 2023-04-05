import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding, NgModule } from '@angular/core';

class AttrButtonComponent {
    constructor() {
        this.size = 'default';
        this.color = 'primary';
        this.tabIndex = null;
        this.disabled = false;
    }
    get classList() {
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
    get buttonTabIndex() {
        return this.disabled ? -1 : (this.tabIndex === null ? null : this.tabIndex);
    }
}
AttrButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AttrButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: AttrButtonComponent, selector: "button[attr-button], a[attr-button]", inputs: { size: "size", color: "color", tabIndex: "tabIndex", disabled: "disabled" }, host: { properties: { "disabled": "this.disabled", "class": "this.classList", "tabindex": "this.buttonTabIndex" } }, exportAs: ["attrButton"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'button[attr-button], a[attr-button]',
                    exportAs: 'attrButton',
                    template: '<ng-content></ng-content>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }], disabled: [{
                type: HostBinding,
                args: ['disabled']
            }, {
                type: Input
            }], classList: [{
                type: HostBinding,
                args: ['class']
            }], buttonTabIndex: [{
                type: HostBinding,
                args: ['tabindex']
            }] } });

class AttrButtonModule {
}
AttrButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AttrButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonModule, declarations: [AttrButtonComponent], exports: [AttrButtonComponent] });
AttrButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: AttrButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AttrButtonComponent
                    ],
                    imports: [],
                    exports: [
                        AttrButtonComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of attr-button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AttrButtonComponent, AttrButtonModule };
//# sourceMappingURL=attr-button.mjs.map
