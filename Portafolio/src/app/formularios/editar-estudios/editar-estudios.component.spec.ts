import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarEstudiosComponent } from './editar-estudios.component';

describe('EditarEstudiosComponent', () => {
  let component: EditarEstudiosComponent;
  let fixture: ComponentFixture<EditarEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
