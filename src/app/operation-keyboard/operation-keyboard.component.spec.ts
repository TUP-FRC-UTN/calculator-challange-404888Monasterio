import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationKeyboardComponent } from './operation-keyboard.component';

describe('OperationKeyboardComponent', () => {
  let component: OperationKeyboardComponent;
  let fixture: ComponentFixture<OperationKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationKeyboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
