package com.poberwong.launcher;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by poberwong on 16/6/30.
 */
public class IntentLauncherPackage implements ReactPackage{
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new IntentLauncherModule(reactContext),
                new ActivityUtilsModule(reactContext),
                new ZipUtilsModule(reactContext),
                new ShellUtilsModule(reactContext),
                new ServiceUtilsModule(reactContext),
                new RomUtilsModule(reactContext),
                new ScreenUtilsModule(reactContext),
                new PathUtilsModule(reactContext),
                new KeyboardUtilsModule(reactContext),
                new VibrateUtilsModule(reactContext),
                new VolumeUtilsModule(reactContext),
                new FlashlightUtilsModule(reactContext),
                new BrightnessUtilsModule(reactContext),
                new AppUtilsModule(reactContext)
        ); // 返回一个NativeModule范型的数组就ok
    }

    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
