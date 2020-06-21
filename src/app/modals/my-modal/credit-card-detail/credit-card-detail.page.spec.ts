import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditCardDetailPage } from './credit-card-detail.page';

describe('CreditCardDetailPage', () => {
  let component: CreditCardDetailPage;
  let fixture: ComponentFixture<CreditCardDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditCardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
