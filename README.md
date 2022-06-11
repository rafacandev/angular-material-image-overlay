Deprecation Notice
==================
In all transparency, I receive many dependabot alerts advising to update versions of the dependencies in this project. This project was created a long time ago with the nimial dependency set required by Angular and I am very surprised by the number of security alerts.

I am not developing in Angular in my day to day and I am getting rusty. Moreover, I am confident  that nowadays there are better options out there for a simple image overlay.

In conclusion, I am deprecating this project and I won't be maintaining it anymore (except for merging dependabot PRs). I am keeping this project up though as it might serve as reference if you ever want to create a project like this from scratch.

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
    'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA23618-1024x768.jpg',
    'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA23761-800x600.jpg',
    'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA23794-800x600.jpg',
    'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA23214-1440x900.jpg'
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
npm run build:lib
```

Use these commands if you wish to install a development version manually into a different project without `npm install`. This is only recommended for prototyping.
```
cd ${APP_ROOT_FOLDER}
cp -r dist/angular-material-image-overlay/ ${YOUR_APP}/node_modules/
```

Use these commands if you wish to deploy the demo application to git hub pages:
```
npm run demo
git commit -a -m "Deploying to github pages"
```

Follow this steps when publishing:
```
cd ${APP_ROOT_FOLDER}
cd projects/angular-material-image-overlay/
npm version patch
cd ../../
npm run build:lib
npm version patch --no-git-tag-version
git commit -a -m "Version up to vxxx"
cd dist/angular-material-image-overlay
npm publish
```

License
=======
Code released under the [MIT license](LICENSE)
