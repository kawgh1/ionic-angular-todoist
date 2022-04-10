import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverviewPage } from './overview.page';

describe('OverviewPage', () => {
  let component: OverviewPage;
  let fixture: ComponentFixture<OverviewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function waitForAsync(arg0: () => void): (done: DoneFn) => Promise<void> {
  throw new Error('Function not implemented.');
}
