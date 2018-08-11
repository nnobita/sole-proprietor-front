import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeTrnComponent } from './notice-trn.component';

describe('NoticeTrnComponent', () => {
  let component: NoticeTrnComponent;
  let fixture: ComponentFixture<NoticeTrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeTrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeTrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
