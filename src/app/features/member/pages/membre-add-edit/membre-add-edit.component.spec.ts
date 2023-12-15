import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreAddEditComponent } from './membre-add-edit.component';

describe('MembreAddEditComponent', () => {
  let component: MembreAddEditComponent;
  let fixture: ComponentFixture<MembreAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembreAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
