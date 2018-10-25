import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGradvideosComponent } from './main-gradvideos.component';

describe('MainGradvideosComponent', () => {
  let component: MainGradvideosComponent;
  let fixture: ComponentFixture<MainGradvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGradvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGradvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
