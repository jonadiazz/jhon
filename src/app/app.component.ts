import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jhonatan';
  last = 'Vasquez';

  votes = 1000;
  // ngOnInit() {
  //   this.votes = 0;
  // }

  castVote(castedVote): void {
    this.votes = this.votes + castedVote;
    // console.log(this.votes);
  }
}
