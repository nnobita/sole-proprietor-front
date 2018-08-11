import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleProprietorFilterComponent } from './sole-proprietor-filter.component';

describe('SoleProprietorFilterComponent', () => {
  let component: SoleProprietorFilterComponent;
  let fixture: ComponentFixture<SoleProprietorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoleProprietorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleProprietorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
