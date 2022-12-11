import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabel6Component } from './tabel6.component';

describe('Tabel6Component', () => {
  let component: Tabel6Component;
  let fixture: ComponentFixture<Tabel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
