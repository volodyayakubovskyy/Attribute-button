/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttrButtonGroupComponent } from './attr-button-group.component';

describe('AttrButtonGroupComponent', () => {
  let component: AttrButtonGroupComponent;
  let fixture: ComponentFixture<AttrButtonGroupComponent>;
  let buttonElement: HTMLButtonElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AttrButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrButtonGroupComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.nativeNode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply classname', () => {
    expect(buttonElement.className).toBe('attr-button-group');
  });
});
