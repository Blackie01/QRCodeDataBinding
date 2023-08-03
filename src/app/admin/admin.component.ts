import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router) {}

  // code for when picking data from the value of the tag
  @Output() sendDataEvent = new EventEmitter<string>();
  transferData() {
    const rcNumber = (document.getElementById('rcNumber') as HTMLParagraphElement).innerText;
    const companyName = (document.getElementById('company-name') as HTMLParagraphElement).innerText;

    const concatenatedData = `Approved Electronic Financial Statement by CAC. Company Name: ${companyName}. With ${rcNumber}`;
    const dataToSend = concatenatedData;
    this.sendDataEvent.emit(dataToSend);

    // Convert data to a JSON string
    const stringifiedData = JSON.stringify(dataToSend);

    // Open a new tab with the ResultsComponent and pass data as query parameters
    const url = this.router
      .createUrlTree(['/result'], { queryParams: { data: stringifiedData } })
      .toString();
    window.open(url, '_blank');
  }
}
