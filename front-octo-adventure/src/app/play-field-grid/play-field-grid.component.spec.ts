import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFieldGridComponent } from './play-field-grid.component';

describe('PlayFieldGridComponent', () => {
  let component: PlayFieldGridComponent;
  let fixture: ComponentFixture<PlayFieldGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayFieldGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFieldGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
