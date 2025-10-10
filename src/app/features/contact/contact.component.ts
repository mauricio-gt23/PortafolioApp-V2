import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import emailjs from '@emailjs/browser';
import {
   fadeIn,
   fadeInUp,
   scaleIn,
   slideInLeft,
   slideInRight,
} from '../../shared/animations/animations';

@Component({
   selector: 'app-contact',
   templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.scss'],
   animations: [fadeInUp, slideInLeft, slideInRight, scaleIn, fadeIn],
   standalone: true,
   imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule],
})
export class ContactComponent implements OnInit {
   contactForm!: FormGroup;
   isSubmitting = false;
   submitSuccess = false;
   submitError = false;

   constructor(private fb: FormBuilder) {}

   ngOnInit(): void {
      this.initForm();
   }

   initForm(): void {
      this.contactForm = this.fb.group({
         email_id: ['', [Validators.required, Validators.email]],
         subject: ['', [Validators.required, Validators.minLength(3)]],
         message: ['', [Validators.required, Validators.minLength(10)]],
      });
   }

   onSubmit(): void {
      if (this.contactForm.invalid) {
         this.markFormGroupTouched(this.contactForm);
         return;
      }

      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      const serviceId = 'service_rkv8ajg';
      const templateId = 'template_4pic5ld';
      const publicKey = 'SqrPmyw4aD-7NscTD';

      const templateParams = {
         email_id: this.contactForm.value.email_id,
         subject: this.contactForm.value.subject,
         message: this.contactForm.value.message,
      };

      emailjs
         .send(serviceId, templateId, templateParams, publicKey)
         .then(() => {
            this.isSubmitting = false;
            this.submitSuccess = true;
            this.contactForm.reset();
         })
         .catch(() => {
            this.isSubmitting = false;
            this.submitError = true;
         });
   }

   markFormGroupTouched(formGroup: FormGroup): void {
      Object.values(formGroup.controls).forEach(control => {
         control.markAsTouched();
         if ((control as any).controls) {
            this.markFormGroupTouched(control as FormGroup);
         }
      });
   }

   hasError(controlName: string, errorName: string): boolean {
      const control = this.contactForm.get(controlName);
      return !!(control && control.touched && control.hasError(errorName));
   }
}
