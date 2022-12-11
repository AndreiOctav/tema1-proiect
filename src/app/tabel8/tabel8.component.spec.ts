import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel8Component } from './tabel8.component';

describe('Tabel8Component', () => {
  let component: Tabel8Component;
  let fixture: ComponentFixture<Tabel8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabel8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabel8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
