import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: number = 50;
  menuState: boolean = false;

  title = 'not-null';

  dropMenu() {
    this.menuState = !this.menuState;
  }
}
