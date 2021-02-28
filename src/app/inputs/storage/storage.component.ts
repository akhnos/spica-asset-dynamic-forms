import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() key: string;
  @Input() label: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    const file = event.target.files[0]
    console.log(file);
  }

  onUpload() {
    /*const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('my-backend.com/file-upload', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });*/
  }
}
