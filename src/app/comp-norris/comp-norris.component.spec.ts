import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNorrisComponent } from './comp-norris.component';

describe('CompNorrisComponent', () => {
  let component: CompNorrisComponent;
  let fixture: ComponentFixture<CompNorrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompNorrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
