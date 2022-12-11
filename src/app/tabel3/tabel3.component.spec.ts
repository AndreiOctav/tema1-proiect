import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel3Component } from './tabel3.component';

describe('Tabel3Component', () => {
  let component: Tabel3Component;
  let fixture: ComponentFixture<Tabel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
