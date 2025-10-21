import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Macchine } from './macchine';

describe('Macchine', () => {
  let component: Macchine;
  let fixture: ComponentFixture<Macchine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Macchine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Macchine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
