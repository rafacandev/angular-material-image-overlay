import { Component } from '@angular/core';
import { AngularMaterialImageOverlayService } from 'angular-material-image-overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = [
    'https://cdn.plixs.com/uploads/preview/plixs-photo-31231544218415smhm2g5a1u.jpg',
    'https://cdn.plixs.com/uploads/preview/tulips-red-macro-vivid-color-8901524736141v6mymapfyk.jpg',
    'https://cdn.plixs.com/uploads/preview/plixs-photo-30291543860948l4z7bnhn7f.jpg',
    'https://cdn.plixs.com/uploads/preview/orange-3267758-10361526730776r0r36bdbrt.jpg'
  ];

  constructor(private imageOverlayService: AngularMaterialImageOverlayService) {
  }

  openImageOverlay(image?: string): void {
    this.imageOverlayService.open(this.images, image);
  }
}
