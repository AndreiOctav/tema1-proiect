import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel1Component } from './tabel1.component';

describe('Tabel1Component', () => {
  let component: Tabel1Component;
  let fixture: ComponentFixture<Tabel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
