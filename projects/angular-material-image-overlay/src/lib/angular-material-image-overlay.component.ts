import { Component, Inject, InjectionToken, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

export const IMAGE_URLS = new InjectionToken<string>('IMAGE_URLS');

@Component({
  templateUrl: './angular-material-image-overlay.component.html',
  styleUrls: ['./angular-material-image-overlay.component.scss']
})
export class AngularMaterialImageOverlayComponent {
  private currentImageIndex = 0;
  currentImage: string;
  onKeydown = new Subject<number>();
  onClose = new Subject<void>();
  
  constructor(@Inject(IMAGE_URLS) public images: string[]) {
    this.currentImage = this.images[this.currentImageIndex];
  }

  // TODO: Can we make this private?
  @HostListener('document:keydown', ['$event']) handleKeydown(event: KeyboardEvent) {
    this.onKeydown.next(event.keyCode);
  }

  close(): void {
    this.onClose.next();
  }

  nextImage(): void {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
      this.currentImage = this.images[this.currentImageIndex];
    }
  }

  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.currentImage = this.images[this.currentImageIndex];
    }
  }
}