import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootOperationButtonComponent } from './root-operation-button.component';

describe('RootOperationButtonComponent', () => {
  let component: RootOperationButtonComponent;
  let fixture: ComponentFixture<RootOperationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootOperationButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootOperationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
