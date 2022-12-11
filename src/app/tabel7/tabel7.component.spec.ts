import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel7Component } from './tabel7.component';

describe('Tabel7Component', () => {
  let component: Tabel7Component;
  let fixture: ComponentFixture<Tabel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
