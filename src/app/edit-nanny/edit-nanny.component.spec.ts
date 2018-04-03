import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNannyComponent } from './edit-nanny.component';

describe('EditNannyComponent', () => {
  let component: EditNannyComponent;
  let fixture: ComponentFixture<EditNannyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNannyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNannyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
