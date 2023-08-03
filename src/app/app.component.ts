import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataToSend!: string;

  receiveData(data: string) {
    this.dataToSend = data;
  }
}
