import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent, ResultComponent, AdminComponent],
  imports: [BrowserModule, AppRoutingModule, QRCodeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
