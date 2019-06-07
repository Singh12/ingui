import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentrequestComponent } from './sentrequest.component';

describe('SentrequestComponent', () => {
  let component: SentrequestComponent;
  let fixture: ComponentFixture<SentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
