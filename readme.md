# Ionic Angular Todo App

- ## deploy on Netlify
- https://blog.rodrigograca.com/how-to-deploy-an-ionic-5-app-on-netlify/

- ## live
- https://ionic-angular-todoist.netlify.app/

- ## mobile emulator
- ### For Capacitor deployment
- ionic build
- npx cap add iOS
- npx cap sync
- ionic capacitor run ios --livereload --external

command is `ionic cap open android` for Open project in Android Studio.

**`ionic cap run android` for run project via android studio** - this command works, opens this VS Code app in Android Studio to run on emulator

`ionic cap run android --external` for liveReload but here need is both of devices connected on same network.

- ## using ngModel
- https://www.guru99.com/ng-model-angularjs.html

## IONIC 6 DATETIME

https://www.youtube.com/watch?v=iq_XIPml9_M

Android build error

`targetSdkVersion project.hasProperty('targetSdkVersion') ? rootProject.ext.targetSdkVersion : 29`
https://stackoverflow.com/questions/67922091/unable-to-resolve-class-targetsdkversion
