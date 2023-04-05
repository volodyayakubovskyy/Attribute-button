import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class AttrButtonGroupComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ci1idXR0b24tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXR0ci1idXR0b24vYXR0ci1idXR0b24tZ3JvdXAvc3JjL2F0dHItYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTbkcsTUFBTSxPQUFPLHdCQUF3QjtJQVByQztRQVF3QixVQUFLLEdBQUcsbUJBQW1CLENBQUM7S0FDbkQ7O3NIQUZZLHdCQUF3QjswR0FBeEIsd0JBQXdCLHlJQUp6QiwyQkFBMkI7NEZBSTFCLHdCQUF3QjtrQkFQcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUV1QixLQUFLO3NCQUExQixXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXR0ci1idXR0b24tZ3JvdXAnLFxuICBleHBvcnRBczogJ2F0dHJCdXR0b25Hcm91cCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBBdHRyQnV0dG9uR3JvdXBDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3MgPSAnYXR0ci1idXR0b24tZ3JvdXAnO1xufVxuIl19