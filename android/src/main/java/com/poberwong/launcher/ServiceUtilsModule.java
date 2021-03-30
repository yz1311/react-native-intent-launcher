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



public class ServiceUtilsModule extends ReactContextBaseJavaModule {


    public ServiceUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ServiceUtilsModule";
    }

    @ReactMethod
    public void getAllRunningServices(final Promise promise) {
        try {
            Set<String> result = ServiceUtils.getAllRunningServices();
            WritableArray array = Arguments.createArray();
            for (Iterator iterator = result.iterator(); iterator.hasNext();) {
                array.pushString((String)iterator.next());
            }
            promise.resolve(array);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }

    @ReactMethod
    public void startService(String className) {
        ServiceUtils.startService(className);
    }

    @ReactMethod
    public void stopService(String className) {
        ServiceUtils.stopService(className);
    }

    @ReactMethod
    public void isServiceRunning(String className, final Promise promise) {
        promise.resolve(ServiceUtils.isServiceRunning(className));
    }
}
