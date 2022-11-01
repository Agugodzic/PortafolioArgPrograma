import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaDeTextoComponent } from './ventana-de-texto.component';

describe('VentanaDeTextoComponent', () => {
  let component: VentanaDeTextoComponent;
  let fixture: ComponentFixture<VentanaDeTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaDeTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaDeTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
