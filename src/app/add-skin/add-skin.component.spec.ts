import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSkinComponent } from './add-skin.component';

describe('AddSkinComponent', () => {
  let component: AddSkinComponent;
  let fixture: ComponentFixture<AddSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSkinComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
