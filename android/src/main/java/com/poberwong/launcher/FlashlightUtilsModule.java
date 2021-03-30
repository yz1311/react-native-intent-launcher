package com.poberwong.launcher;

import android.app.Activity;
import android.content.Intent;
import android.content.ComponentName;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import com.blankj.utilcode.util.AppUtils;
import com.blankj.utilcode.util.FlashlightUtils;
import com.blankj.utilcode.util.KeyboardUtils;
import com.blankj.utilcode.util.ServiceUtils;
import com.blankj.utilcode.util.ShellUtils;
import com.blankj.utilcode.util.ZipUtils;
import com.facebook.react.bridge.*;

import java.io.Console;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.Iterator;



public class FlashlightUtilsModule extends ReactContextBaseJavaModule {


    public FlashlightUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "FlashlightUtilsModule";
    }


    @ReactMethod
    public void isFlashlightEnable(final Promise promise) {
        promise.resolve(FlashlightUtils.isFlashlightEnable());
    }

    @ReactMethod
    public void isFlashlightOn(final Promise promise) {
        promise.resolve(FlashlightUtils.isFlashlightOn());
    }

    @ReactMethod
    public void setFlashlightStatus(boolean isOn) {
        FlashlightUtils.setFlashlightStatus(isOn);
    }

    @ReactMethod
    public void destroy() {
        FlashlightUtils.destroy();
    }
}
