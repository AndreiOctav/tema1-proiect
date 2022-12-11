import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel4Component } from './tabel4.component';

describe('Tabel4Component', () => {
  let component: Tabel4Component;
  let fixture: ComponentFixture<Tabel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
