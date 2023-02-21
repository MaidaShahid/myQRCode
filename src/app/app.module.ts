import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    NgxScannerQrcodeModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }