import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should access content inside ion-card', () => {
    // const card: HTMLElement = fixture.nativeElement.querySelector('ion-card');
    // const contentInsideCard = card.querySelector('.some-element');

    const card = fixture.debugElement.query(By.css('ion-card'));
    const contentInsideCard = card.query(By.css('.some-element'));

    expect(contentInsideCard).toBeDefined();
  });
});
