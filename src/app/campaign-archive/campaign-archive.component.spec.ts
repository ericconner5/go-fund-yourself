import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignArchiveComponent } from './campaign-archive.component';

describe('CampaignArchiveComponent', () => {
  let component: CampaignArchiveComponent;
  let fixture: ComponentFixture<CampaignArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
