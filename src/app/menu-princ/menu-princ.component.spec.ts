import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincComponent } from './menu-princ.component';

describe('MenuPrincComponent', () => {
  let component: MenuPrincComponent;
  let fixture: ComponentFixture<MenuPrincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrincComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
