import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswordForgottenPage } from './password-forgotten.page';

describe('PasswordForgottenPage', () => {
  let component: PasswordForgottenPage;
  let fixture: ComponentFixture<PasswordForgottenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordForgottenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordForgottenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
