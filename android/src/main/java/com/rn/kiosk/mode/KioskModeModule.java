package com.rn.kiosk.mode;

/**
 * Created by azou on 15/02/16.
 */
import android.app.Activity;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;


import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * RNMK Package declaration.
 *
 * Created by ywu on 15/9/23.
 */
public class KioskModeModule implements ReactPackage {
    public KioskModeModule(){

    }

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactApplicationContext) {
    return  Arrays.<NativeModule>asList(new KioskMode(reactApplicationContext));
  }

  @Override
  public List<Class<? extends JavaScriptModule>> createJSModules() {
    return Collections.emptyList();
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactApplicationContext) {
      return Collections.emptyList();
  }
}