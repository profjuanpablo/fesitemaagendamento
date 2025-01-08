import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarServicoComponent } from './form-editar-servico.component';

describe('FormEditarServicoComponent', () => {
  let component: FormEditarServicoComponent;
  let fixture: ComponentFixture<FormEditarServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditarServicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
