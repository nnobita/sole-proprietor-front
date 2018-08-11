import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoleProprietorMstComponent } from './sole-proprietor-mst.component';

describe('SoleProprietorMstComponent', () => {
  let component: SoleProprietorMstComponent;
  let fixture: ComponentFixture<SoleProprietorMstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoleProprietorMstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleProprietorMstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
