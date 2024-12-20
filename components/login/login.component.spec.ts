import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display login message when credentials are valid', () => {
    component.email = 'user@example.com';
    component.password = 'password';
    spyOn(window, 'alert');
    component.onLogin();
    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  });

  it('should display error message when credentials are invalid', () => {
    component.email = 'wrong@example.com';
    component.password = 'wrongpassword';
    spyOn(window, 'alert');
    component.onLogin();
    expect(window.alert).toHaveBeenCalledWith('Invalid email or password. Please try again.');
  });
});
