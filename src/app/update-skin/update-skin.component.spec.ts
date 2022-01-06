import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSkinComponent } from './update-skin.component';

describe('UpdateSkinComponent', () => {
  let component: UpdateSkinComponent;
  let fixture: ComponentFixture<UpdateSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSkinComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
