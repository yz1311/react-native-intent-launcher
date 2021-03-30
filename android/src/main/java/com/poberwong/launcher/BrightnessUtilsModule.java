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
import com.blankj.utilcode.util.BrightnessUtils;
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



public class BrightnessUtilsModule extends ReactContextBaseJavaModule {


    public BrightnessUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "BrightnessUtilsModule";
    }

    @ReactMethod
    public void isAutoBrightnessEnabled(final Promise promise) {
        promise.resolve(BrightnessUtils.isAutoBrightnessEnabled());
    }

    @ReactMethod
    public void setAutoBrightnessEnabled(boolean enabled, final Promise promise) {
        promise.resolve(BrightnessUtils.setAutoBrightnessEnabled(enabled));
    }

    @ReactMethod
    public void getBrightness(final Promise promise) {
        promise.resolve(BrightnessUtils.getBrightness());
    }

    @ReactMethod
    public void setBrightness(int brightness, final Promise promise) {
        promise.resolve(BrightnessUtils.setBrightness(brightness));
    }
}
