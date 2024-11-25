import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OatuhCallbackComponent } from './oatuh-callback.component';

describe('OatuhCallbackComponent', () => {
  let component: OatuhCallbackComponent;
  let fixture: ComponentFixture<OatuhCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OatuhCallbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OatuhCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
