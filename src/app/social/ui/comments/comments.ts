import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FirstLetterPipe } from '../../util/first-letter-pipe';
import { Comment } from '../../data/comment.model';

@Component({
  selector: 'app-comments',
  imports: [DatePipe, FirstLetterPipe, RatingModule, FormsModule],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comments {
  comments = input<Comment[]>();
}
