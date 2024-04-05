import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverSectionComponent } from './deliver-section.component';

describe('DeliverSectionComponent', () => {
  let component: DeliverSectionComponent;
  let fixture: ComponentFixture<DeliverSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliverSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
