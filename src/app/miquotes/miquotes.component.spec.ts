import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiquotesComponent } from './miquotes.component';

describe('MiquotesComponent', () => {
  let component: MiquotesComponent;
  let fixture: ComponentFixture<MiquotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiquotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
