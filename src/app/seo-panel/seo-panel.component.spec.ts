import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPanelComponent } from './seo-panel.component';

describe('SeoPanelComponent', () => {
  let component: SeoPanelComponent;
  let fixture: ComponentFixture<SeoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
