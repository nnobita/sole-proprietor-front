import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleProprietorSearchComponent } from './sole-proprietor-search.component';

describe('SoleProprietorSearchComponent', () => {
  let component: SoleProprietorSearchComponent;
  let fixture: ComponentFixture<SoleProprietorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoleProprietorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleProprietorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
