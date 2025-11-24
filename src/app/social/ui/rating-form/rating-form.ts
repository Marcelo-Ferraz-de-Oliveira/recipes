import { ChangeDetectionStrategy, Component, input, output, model } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-rating-form',
  imports: [DialogModule, ButtonModule, RatingModule, TextareaModule, ReactiveFormsModule],
  templateUrl: './rating-form.html',
  styleUrl: './rating-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingForm {

  visible = model.required<boolean>();
  form = input.required<FormGroup>();
  saveEvent = output<FormGroup>();
  closeEvent = output<void>();

  get rating() {
    return this.form().get('rating');
  }

  get comment() {
    return this.form().get('comment');
  }

}
