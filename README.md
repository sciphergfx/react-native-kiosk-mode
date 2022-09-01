
# This project is no longer maintained

# React native kiosk mode functionality for Android

A simple react native plugin to achieve kiosk mode (immersive mode) on android


##### Props: KioskMode

```html
import {Immersive} from 'react-native-kiosk-mode'

<View>
    <Immersive />
    <RootContainer />
</View>
```

------------

## Android Installation

Install the npm package [`react-native-kiosk-mode`](https://www.npmjs.com/package/react-native-kiosk-mode). Inside your React Native project, run ([example](https://github.com/sciphergfx/react-native-kiosk-mode/tree/master/example)):
```bash
npm install --save react-native-kiosk-mode
```

In `android/settings.gradle`, remove the line `include ':app'` and add the following lines
```
include ':react-native-kiosk-mode'
project(':react-native-kiosk-mode').projectDir = file('../node_modules/react-native-kiosk-mode/android')
```
**NOTE** : If you have included other libraries in your project, the `include` line will contain the other dependencies too.

In `android/app/build.gradle`, add a dependency to `':react-native-kiosk-mode'`

```
dependencies {
    compile project(':react-native-kiosk-mode')
}
```

Next, you need to change the `MainApplication` of your app to register `KioskModeModule` :
```java
import com.rn.kiosk.mode.KioskModeModule;  // add this import

public class MainApplication extends Application implements ReactApplication {
    //...

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new KioskModeModule() // add this manager
      );
    }
```
Next, you need to add the `onWindowFocusChanged` function to your Apps `MainActivity.java` :
```java
import android.view.View;// add this import
 //...

public class MainActivity extends ReactActivity {
     //...
    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
            super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            getWindow().getDecorView()
        .setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
         }
    }
}
```

---

Android kiosk mode for react native by Seyi Ogunbowale

---
