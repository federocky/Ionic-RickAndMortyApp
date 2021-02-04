import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationsListPage } from './locations-list.page';

describe('LocationsListPage', () => {
  let component: LocationsListPage;
  let fixture: ComponentFixture<LocationsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
