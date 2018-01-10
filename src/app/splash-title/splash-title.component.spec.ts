import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashTitleComponent } from './splash-title.component';

describe('SplashTitleComponent', () => {
  let component: SplashTitleComponent;
  let fixture: ComponentFixture<SplashTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
