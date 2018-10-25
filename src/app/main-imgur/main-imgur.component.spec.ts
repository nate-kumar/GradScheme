import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImgurComponent } from './main-imgur.component';

describe('MainImgurComponent', () => {
  let component: MainImgurComponent;
  let fixture: ComponentFixture<MainImgurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImgurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImgurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
