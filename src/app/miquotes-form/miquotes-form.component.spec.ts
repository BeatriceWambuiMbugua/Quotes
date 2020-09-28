import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiquotesFormComponent } from './miquotes-form.component';

describe('MiquotesFormComponent', () => {
  let component: MiquotesFormComponent;
  let fixture: ComponentFixture<MiquotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiquotesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiquotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
