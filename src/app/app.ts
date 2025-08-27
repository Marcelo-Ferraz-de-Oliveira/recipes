import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/ui/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'My Recipe Book';

  // constructor(private service: RecipeService) {
  //   this.service.get().subscribe((data) => {
  //     console.log(data);
  //   });
  // }

}
