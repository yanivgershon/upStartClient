import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditEntityComponent } from './create-edit-entity.component';

describe('CreateEditEntityComponent', () => {
  let component: CreateEditEntityComponent;
  let fixture: ComponentFixture<CreateEditEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
