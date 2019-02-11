import { Component } from '@angular/core';
import { AngularMaterialImageOverlayService } from 'projects/angular-material-image-overlay/src/public_api';

@Component({
  selector: 'amio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  images = ['https://plixs.com/public/uploads/preview/plixs-photo-31231544218415smhm2g5a1u.jpg',
  'https://plixs.com/public/uploads/preview/rope-node-solid-maritime-4361524216895fj1pvztgd1.jpg',
  'https://plixs.com/public/uploads/preview/plixs-photo-31231544218168fgcal7xkxe.jpg',
  'https://plixs.com/public/uploads/preview/plixs-photo-31231544217590vwh6204yse.jpg'];

  constructor(private imageOverlayService: AngularMaterialImageOverlayService) {
  }

  openImageOverlay(): void {
    console.log('openImageOverlay!', this.imageOverlayService);
    this.imageOverlayService.open(this.images);
  }

}
