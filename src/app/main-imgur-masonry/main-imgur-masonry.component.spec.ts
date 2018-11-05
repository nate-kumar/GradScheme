import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImgurMasonryComponent } from './main-imgur-masonry.component';

describe('MainImgurMasonryComponent', () => {
  let component: MainImgurMasonryComponent;
  let fixture: ComponentFixture<MainImgurMasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImgurMasonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImgurMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
