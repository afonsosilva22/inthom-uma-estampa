import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDesignPage } from './create-design.page';

describe('CreateDesignPage', () => {
  let component: CreateDesignPage;
  let fixture: ComponentFixture<CreateDesignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
