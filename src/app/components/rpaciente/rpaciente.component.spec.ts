import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpacienteComponent } from './rpaciente.component';

describe('RpacienteComponent', () => {
  let component: RpacienteComponent;
  let fixture: ComponentFixture<RpacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
