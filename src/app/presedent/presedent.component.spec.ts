import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresedentComponent } from './presedent.component';

describe('PresedentComponent', () => {
  let component: PresedentComponent;
  let fixture: ComponentFixture<PresedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresedentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
