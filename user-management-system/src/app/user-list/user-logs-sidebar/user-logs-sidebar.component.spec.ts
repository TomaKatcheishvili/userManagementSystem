import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogsSidebarComponent } from './user-logs-sidebar.component';

describe('UserLogsSidebarComponent', () => {
  let component: UserLogsSidebarComponent;
  let fixture: ComponentFixture<UserLogsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLogsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
