

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

import { ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {

  let component: ContactComponent;

  let fixture: ComponentFixture;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ ContactComponent ],

      imports: [ ReactiveFormsModule ]

    })

    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should have invalid form when empty', () => {

    expect(component.contactForm.valid).toBeFalsy();

  });

  it('should validate email field correctly', () => {

    const email = component.contactForm.controls['email'];

    email.setValue('invalid-email');

    expect(email.valid).toBeFalsy();

    email.setValue('valid@example.com');

    expect(email.valid).toBeTruthy();

  });

  // Add more tests to reach at least 80% code coverage

});