import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizpartnerMstComponent } from './bizpartner-mst.component';

describe('BizpartnerMstComponent', () => {
  let component: BizpartnerMstComponent;
  let fixture: ComponentFixture<BizpartnerMstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizpartnerMstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizpartnerMstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
