import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaypalDetailPage } from './paypal-detail.page';

describe('PaypalDetailPage', () => {
  let component: PaypalDetailPage;
  let fixture: ComponentFixture<PaypalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaypalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
