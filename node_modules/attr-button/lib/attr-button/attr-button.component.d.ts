import * as i0 from "@angular/core";
export declare type AttrButtonSize = 'default' | 'small';
export declare type AttrButtonColor = 'primary' | 'accent' | 'warn';
export declare class AttrButtonComponent {
    size: AttrButtonSize;
    color: AttrButtonColor;
    tabIndex: number | null;
    disabled: boolean;
    get classList(): string;
    get buttonTabIndex(): number | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttrButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AttrButtonComponent, "button[attr-button], a[attr-button]", ["attrButton"], { "size": "size"; "color": "color"; "tabIndex": "tabIndex"; "disabled": "disabled"; }, {}, never, ["*"]>;
}
