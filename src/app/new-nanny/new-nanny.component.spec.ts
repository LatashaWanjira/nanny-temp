import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNannyComponent } from './new-nanny.component';

describe('NewNannyComponent', () => {
  let component: NewNannyComponent;
  let fixture: ComponentFixture<NewNannyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNannyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNannyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
