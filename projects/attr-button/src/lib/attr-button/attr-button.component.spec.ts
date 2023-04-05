import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrButtonComponent } from './attr-button.component';

describe('AttrButtonComponent', () => {
  let component: AttrButtonComponent;
  let fixture: ComponentFixture<AttrButtonComponent>;
  let buttonElement: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.nativeNode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply classname', () => {
    expect(buttonElement.className).toContain('attr-button');
  });

  it('shout apply primary color classname', () => {
    component.color = 'primary';
    fixture.detectChanges();
    buttonElement = fixture.debugElement.nativeNode;
    expect(buttonElement.className).toContain('attr-button-primary');
  });

  it('shout apply accent color classname', () => {
    component.color = 'accent';
    fixture.detectChanges();
    buttonElement = fixture.debugElement.nativeNode;
    expect(buttonElement.className).toContain('attr-button-accent');
  });

  it('shout apply warn color classname', () => {
    component.color = 'warn';
    fixture.detectChanges();
    buttonElement = fixture.debugElement.nativeNode;
    expect(buttonElement.className).toContain('attr-button-warn');
  });

  it('shout apply small size classname', () => {
    component.size = 'small';
    fixture.detectChanges();
    buttonElement = fixture.debugElement.nativeNode;
    expect(buttonElement.className).toContain('attr-button-small');
  });

  it('shout apply disable classname', () => {
    component.disabled = true;
    fixture.detectChanges();
    buttonElement = fixture.debugElement.nativeNode;
    expect(buttonElement.getAttribute('disabled')).toBeTruthy();
  });
});
