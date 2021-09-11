import { Component} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  feedbackForm: FormGroup;

  constructor(private router: Router) { }

  onSubmit(val) {
    // on submit redirects to thank you page.
    console.log(val);
    this.router.navigate(['/thankyou']);
  }

}
