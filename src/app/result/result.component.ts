import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input()
  receivedData!: string;
  downloadUrl!: boolean;
  qrOutput!: string;
  downloadButton: string = '';
  downloadLink!: string | undefined;

  currentDate: Date = new Date();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Fetch data from query parameters when the component initializes
    this.route.queryParams.subscribe((params) => {
      const stringifiedData = params['data'];
      this.receivedData = JSON.parse(stringifiedData); // Parse data back to its original format
      this.generateQRCode();
    });
  }

  generateQRCode() {
    this.downloadUrl = true;

    if (this.receivedData) {
      this.qrOutput = this.receivedData;
      // Convert the URL to a data URL (base64 encoded image)
      const qrDataURL =
        'data:image/png;base64,' +
        this.getBase64Image(
          document.querySelector('qrcode canvas') as HTMLCanvasElement
        );
      // Create a temporary anchor element to initiate the download
      const tempLink = document.createElement('a');
      tempLink.href = qrDataURL;
      document.body.appendChild(tempLink);

      // Store the data URL to show the download link
      this.downloadLink = qrDataURL;
    }
  }

  // Helper function to get the base64 encoded image from the canvas
  private getBase64Image(canvas: HTMLCanvasElement): string {
    const dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }
}
