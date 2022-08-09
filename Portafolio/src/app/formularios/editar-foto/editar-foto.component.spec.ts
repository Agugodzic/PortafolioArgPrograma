import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFotoComponent } from './editar-foto.component';

describe('EditarFotoComponent', () => {
  let component: EditarFotoComponent;
  let fixture: ComponentFixture<EditarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
