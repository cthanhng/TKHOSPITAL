import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualDocComponent } from './virtual-doc.component';

describe('VirtualDocComponent', () => {
  let component: VirtualDocComponent;
  let fixture: ComponentFixture<VirtualDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
