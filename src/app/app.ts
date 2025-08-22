import { Component } from '@angular/core';
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
}
