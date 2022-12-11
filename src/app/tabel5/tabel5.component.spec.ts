import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel5Component } from './tabel5.component';

describe('Tabel5Component', () => {
  let component: Tabel5Component;
  let fixture: ComponentFixture<Tabel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabel5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
