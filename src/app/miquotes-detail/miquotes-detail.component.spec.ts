import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiquotesDetailComponent } from './miquotes-detail.component';

describe('MiquotesDetailComponent', () => {
  let component: MiquotesDetailComponent;
  let fixture: ComponentFixture<MiquotesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiquotesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiquotesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
