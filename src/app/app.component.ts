import { Component } from '@angular/core';

// Decorator, adds metadata about this class:
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Root of our application, its a view component for the entire page.
export class AppComponent {
  title = 'app works!';
}
