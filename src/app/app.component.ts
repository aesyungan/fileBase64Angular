import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  imgbase64 = '';
  imageData: any;
  sanitzedImageData: any;
  file: File;
  constructor(private sanitizer: DomSanitizer) { }
  public ngOnInit() {
  }
  getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=> {
      console.log(reader.result);//imagen como string en base 64 esto se guardaria en la base
      this.imageData=reader.result;
    };
    reader.onerror =  (error)=> {
      console.log('Error: ', error);
    };
  }
  changeFile(event){
    
    let file=event.target.files[0];//archivo q selecciono
    this.getBase64(file);
  }

}
