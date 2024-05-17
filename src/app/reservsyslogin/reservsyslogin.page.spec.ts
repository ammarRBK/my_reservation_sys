import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservsysloginPage } from './reservsyslogin.page';

describe('ReservsysloginPage', () => {
  let component: ReservsysloginPage;
  let fixture: ComponentFixture<ReservsysloginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservsysloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
