import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMstComponent } from './basic-mst.component';

describe('BasicMstComponent', () => {
  let component: BasicMstComponent;
  let fixture: ComponentFixture<BasicMstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
