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



public class KeyboardUtilsModule extends ReactContextBaseJavaModule {


    public KeyboardUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "KeyboardUtilsModule";
    }


    @ReactMethod
    public void showSoftInput() {
        KeyboardUtils.showSoftInput();
    }

    @ReactMethod
    public void hideSoftInput() {
        KeyboardUtils.hideSoftInput(getCurrentActivity());
    }

    @ReactMethod
    public void toggleSoftInput() {
        KeyboardUtils.toggleSoftInput();
    }

    @ReactMethod
    public void isSoftInputVisible(final Promise promise) {
        promise.resolve(KeyboardUtils.isSoftInputVisible(getCurrentActivity()));
    }

    @ReactMethod
    public void fixAndroidBug5497() {
        KeyboardUtils.fixAndroidBug5497(getCurrentActivity());
    }

    @ReactMethod
    public void fixSoftInputLeaks() {
        KeyboardUtils.fixSoftInputLeaks(getCurrentActivity());
    }
}
