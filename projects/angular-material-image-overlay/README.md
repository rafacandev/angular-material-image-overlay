angular-material-image-overlay
==============================
An image overlay based on [Angular Material](https://material.angular.io/). Try out the [demo page](https://rafasantos.github.io/angular-material-image-overlay/)

![Screenshot](https://raw.githubusercontent.com/rafasantos/angular-material-image-overlay/master/src/assets/screenshot.jpg "Screenshot from demo page")

Quick Start
-----------
Install the package:

```
npm install angular-material-image-overlay
```

Configure your angular application module (e.g: `app.module.ts`):
```
...
import { AngularMaterialImageOverlayModule, AngularMaterialImageOverlayComponent } from 'angular-material-image-overlay';

@NgModule({
  ...
  imports: [
    ...
    AngularMaterialImageOverlayModule
  ]
})
export class AppModule { }
```

Open the images via `AngularMaterialImageOverlayService.open(images: string[])`
```
images = [
  'https://cdn.plixs.com/uploads/preview/plixs-photo-31231544218415smhm2g5a1u.jpg',
  'https://cdn.plixs.com/uploads/preview/tulips-red-macro-vivid-color-8901524736141v6mymapfyk.jpg',
  'https://cdn.plixs.com/uploads/preview/plixs-photo-30291543860948l4z7bnhn7f.jpg',
  'https://cdn.plixs.com/uploads/preview/orange-3267758-10361526730776r0r36bdbrt.jpg'
];

constructor(private imageOverlayService: AngularMaterialImageOverlayService) {
}

openImageOverlay(): void {
  this.imageOverlayService.open(this.images);
}
```

AngularMaterialImageOverlayDemo
===============================
Demo project to show case how `angular-material-image-overlay` works.

```
git clone https://github.com/rafasantos/angular-material-image-overlay.git
cd angular-material-image-overlay
npm start
```

Navigate to http://localhost:4200

Development
-----------
`${APP_ROOT_FOLDER}` references the root folder of the application typically the git repository root folder.

This command builds the project and override the local `angular-material-image-overlay` installation.
The built package is located at `${APP_ROOT_FOLDER} dist/angular-material-image-overlay`
```
npm run build-dev
```

Use this command if you wish to install a development version manually into a different project without `npm install`. This is only recommended for prototyping.
```
cd ${APP_ROOT_FOLDER}
cp -r dist/angular-material-image-overlay/ ${YOUR_APP}/node_modules/
```

Follow this steps when publishing:
```
cd ${APP_ROOT_FOLDER}
cd projects/angular-material-image-overlay/
npm version patch
cd ../../
npm run build-dev
npm version patch --no-git-tag-version
git commit -a -m "Version up to xxxx
cd dist/angular-material-image-overlay
npm publish
```

License
=======
Code released under the [MIT license](LICENSE)