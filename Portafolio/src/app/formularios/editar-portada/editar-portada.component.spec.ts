import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPortadaComponent } from './editar-portada.component';

describe('EditarPortadaComponent', () => {
  let component: EditarPortadaComponent;
  let fixture: ComponentFixture<EditarPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPortadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
