import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {
  QRCode;
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.QRCode = await this.http.get("https://test-4061d.hq.spicaengine.com/api/fn-execute/qrcode?qr=603bf1721f7cc7002cebe97d").toPromise();
  }

}
