import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDesignPage } from './edit-design.page';

describe('EditDesignPage', () => {
  let component: EditDesignPage;
  let fixture: ComponentFixture<EditDesignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
