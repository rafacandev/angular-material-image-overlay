import { Component } from '@angular/core';
import { AngularMaterialImageOverlayService } from 'angular-material-image-overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageUrls = [
    'https://plixs.com/public/uploads/preview/plixs-photo-31231544218415smhm2g5a1u.jpg',
    'https://plixs.com/public/uploads/preview/rope-node-solid-maritime-4361524216895fj1pvztgd1.jpg',
    'https://plixs.com/public/uploads/preview/plixs-photo-31231544218168fgcal7xkxe.jpg',
    'https://plixs.com/public/uploads/preview/plixs-photo-31231544217590vwh6204yse.jpg'
  ];

  constructor(private imageOverlayService: AngularMaterialImageOverlayService) {
  }

  openImageOverlay(): void {
    this.imageOverlayService.open(this.imageUrls);
  }
}
