import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { ScannerQRCodeConfig, NgxScannerQrcodeService } from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public config: ScannerQRCodeConfig = {
    deviceActive: 1,
    isBeep: true,
    constraints: {
      video: {
        width: { ideal: 280 },
        height: { ideal: 280 }
      }
    }
  };

  
  ngOnInit(): void {
    
    
  }

  
  public async onEvent(e: any): Promise<void> {
    //console.log(e);
    //alert(e[0].value);
    //alert(e.data.value);
    if (e != undefined) {
      if (e[0] != undefined) {
        //await this.AuthenticateStudent(e[0].value, this.parentId);
      }
    }
  }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    //action[fn]();
    action[fn]().subscribe(console.log, console.log);
  }


}
