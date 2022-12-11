import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel2Component } from './tabel2.component';

describe('Tabel2Component', () => {
  let component: Tabel2Component;
  let fixture: ComponentFixture<Tabel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
