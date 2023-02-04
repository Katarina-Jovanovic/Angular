import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlikeSlajderComponent } from './slike-slajder.component';

describe('SlikeSlajderComponent', () => {
  let component: SlikeSlajderComponent;
  let fixture: ComponentFixture<SlikeSlajderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlikeSlajderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlikeSlajderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
