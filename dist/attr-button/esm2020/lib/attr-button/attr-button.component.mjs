import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class AttrButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXR0ci1idXR0b24vc3JjL2xpYi9hdHRyLWJ1dHRvbi9hdHRyLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQWF4RyxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUVcsU0FBSSxHQUFtQixTQUFTLENBQUM7UUFDakMsVUFBSyxHQUFvQixTQUFTLENBQUM7UUFDbkMsYUFBUSxHQUFrQixJQUFJLENBQUM7UUFHL0IsYUFBUSxHQUFHLEtBQUssQ0FBQztLQStCM0I7SUE3QkMsSUFDSSxTQUFTO1FBQ1gsSUFBSSxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEIsS0FBSyxTQUFTLENBQUMsQ0FBQztnQkFDZCxPQUFPLEdBQUcsQ0FBQyxHQUFHLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO2FBQ1A7WUFDRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNiLE9BQU8sR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7Z0JBQzdDLE1BQU07YUFDUDtZQUNELEtBQUssTUFBTSxDQUFDLENBQUM7Z0JBQ1gsT0FBTyxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDM0MsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3pCLE9BQU8sR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RSxDQUFDOztpSEFwQ1UsbUJBQW1CO3FHQUFuQixtQkFBbUIsZ1RBSnBCLDJCQUEyQjs0RkFJMUIsbUJBQW1CO2tCQVAvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUVVLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFHRyxRQUFRO3NCQURoQixXQUFXO3VCQUFDLFVBQVU7O3NCQUN0QixLQUFLO2dCQUdGLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxPQUFPO2dCQTBCaEIsY0FBYztzQkFEakIsV0FBVzt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgQXR0ckJ1dHRvblNpemUgPSAnZGVmYXVsdCcgfCAnc21hbGwnO1xuZXhwb3J0IHR5cGUgQXR0ckJ1dHRvbkNvbG9yID0gJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2F0dHItYnV0dG9uXSwgYVthdHRyLWJ1dHRvbl0nLFxuICBleHBvcnRBczogJ2F0dHJCdXR0b24nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBdHRyQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2l6ZTogQXR0ckJ1dHRvblNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGNvbG9yOiBBdHRyQnV0dG9uQ29sb3IgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJylcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNsYXNzTGlzdCgpOiBzdHJpbmcge1xuICAgIGxldCBjbGFzc2VzID0gWydhdHRyLWJ1dHRvbiddO1xuICAgIHN3aXRjaCAodGhpcy5jb2xvcikge1xuICAgICAgY2FzZSAncHJpbWFyeSc6IHtcbiAgICAgICAgY2xhc3NlcyA9IFsuLi5jbGFzc2VzLCAnYXR0ci1idXR0b24tcHJpbWFyeSddO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FjY2VudCc6IHtcbiAgICAgICAgY2xhc3NlcyA9IFsuLi5jbGFzc2VzLCAnYXR0ci1idXR0b24tYWNjZW50J107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnd2Fybic6IHtcbiAgICAgICAgY2xhc3NlcyA9IFsuLi5jbGFzc2VzLCAnYXR0ci1idXR0b24td2FybiddO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaXplID09PSAnc21hbGwnKSB7XG4gICAgICBjbGFzc2VzID0gWy4uLmNsYXNzZXMsICdhdHRyLWJ1dHRvbi1zbWFsbCddO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygndGFiaW5kZXgnKVxuICBnZXQgYnV0dG9uVGFiSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAtMSA6ICh0aGlzLnRhYkluZGV4ID09PSBudWxsID8gbnVsbCA6IHRoaXMudGFiSW5kZXgpO1xuICB9XG59XG4iXX0=