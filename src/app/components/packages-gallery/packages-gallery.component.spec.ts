import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesGalleryComponent } from './packages-gallery.component';

describe('PackagesGalleryComponent', () => {
  let component: PackagesGalleryComponent;
  let fixture: ComponentFixture<PackagesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
