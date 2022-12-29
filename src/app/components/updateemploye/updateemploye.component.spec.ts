import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemployeComponent } from './updateemploye.component';

describe('UpdateemployeComponent', () => {
  let component: UpdateemployeComponent;
  let fixture: ComponentFixture<UpdateemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateemployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
