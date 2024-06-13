import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InquiryService } from '../../inquiry.service';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css']
})
export class InquiryFormComponent {

  inquiryForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private inquiryService: InquiryService) {
    this.inquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.inquiryForm.invalid) {
      return;
    }

    this.inquiryService.sendInquiry(this.inquiryForm.value).subscribe(
      (      response: any) => {
        this.successMessage = 'Inquiry submitted successfully!';
        this.errorMessage = '';
        this.inquiryForm.reset();
        this.submitted = false;
      },
      (      error: any) => {
        this.successMessage = '';
        this.errorMessage = 'Failed to submit inquiry. Please try again.';
      }
    );
  }
}
