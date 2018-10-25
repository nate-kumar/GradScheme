import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSoundboardComponent } from './main-soundboard.component';

describe('MainSoundboardComponent', () => {
  let component: MainSoundboardComponent;
  let fixture: ComponentFixture<MainSoundboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSoundboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSoundboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
