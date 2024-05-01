import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrarCocheComponent } from './encontrar-coche.component';

describe('EncontrarCocheComponent', () => {
  let component: EncontrarCocheComponent;
  let fixture: ComponentFixture<EncontrarCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncontrarCocheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncontrarCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
