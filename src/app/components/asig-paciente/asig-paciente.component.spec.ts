import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigPacienteComponent } from './asig-paciente.component';

describe('AsigPacienteComponent', () => {
  let component: AsigPacienteComponent;
  let fixture: ComponentFixture<AsigPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
