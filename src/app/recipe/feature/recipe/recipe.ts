import { Component, inject, input, OnInit } from '@angular/core';
import { RecipeService } from '../../data/recipe.service';
// import { ActivatedRoute } from '@angular/router';
// import { map, switchMap } from 'rxjs/operators';
import { first, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RecipeDetail } from '../../ui/recipe-detail/recipe-detail';
import { Recipe as RecipeModel } from '../../data/recipe.model';
import { Comments } from '../../../social/ui/comments/comments';
import { Review } from '../../../social/ui/review/review';
import { RatingForm } from '../../../social/ui/rating-form/rating-form';
import { CommentService } from '../../../social/data/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../../../social/data/comment.model';
import { Visibility } from '../../../shared/data/visibility.model';

@Component({
  selector: 'app-recipe',
  imports: [
    AsyncPipe,
    RecipeDetail,
    Comments,
    Review,
    RatingForm,
  ],
  templateUrl: './recipe.html',
  styleUrl: './recipe.scss'
})
export class Recipe {

  id = input<string>();

  recipeService = inject(RecipeService);
  commentService = inject(CommentService);
  fb = inject(FormBuilder);

  recipe$!: Observable<RecipeModel>;
  comments$!: Observable<Comment[]>;

  ratingForm = this.fb.group({
    rating: ['', Validators.required],
    comment: ['', Validators.required],
  });
  showRatingForm: Visibility = { visible: false };

  ngOnInit() {

    const id = this.id();
    this.comments$ = this.commentService.comments$;
    this.commentService.get(id ?? '').pipe(first()).subscribe();

    this.recipe$ = this.recipeService.getById(this.id() ?? '');
  }

  addComment(form: FormGroup) {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }

    const comment = {
      createdAt: new Date(),
      recipeId: this.id(),
      userId: '123456',
      userName: 'Antônio',
      rating: form.value.rating,
      comment: form.value.comment,
    } as Comment;
    this.commentService.add(comment).pipe(first()).subscribe();
    this.closeRatingForm();
  }

  openRatingForm() {
    this.showRatingForm = { visible: true };
  }
  closeRatingForm() {
    this.showRatingForm = { visible: false };
  }

  // Até o angular 15:
  // route = inject(ActivatedRoute);
  // recipe$ = this.route.params.pipe(
  //   map(params => params['id']),
  //   switchMap((id) => this.recipeService.getById(id)),
  // );

}
