import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleProprietorDetailComponent } from './sole-proprietor-detail.component';

describe('SoleProprietorDetailComponent', () => {
  let component: SoleProprietorDetailComponent;
  let fixture: ComponentFixture<SoleProprietorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoleProprietorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleProprietorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
