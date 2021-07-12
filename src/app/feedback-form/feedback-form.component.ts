import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    // on submit button click redirect to thank you page.
    this.router.navigate(['/thankyou']);
  }

}
