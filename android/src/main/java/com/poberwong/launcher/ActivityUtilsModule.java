package com.poberwong.launcher;

import android.app.Activity;
import android.content.Intent;
import android.content.ComponentName;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import com.blankj.utilcode.util.ActivityUtils;
import com.blankj.utilcode.util.AppUtils;
import com.facebook.react.bridge.*;

import java.io.Console;
import java.io.File;
import java.util.Set;
import java.util.Iterator;

import androidx.core.content.FileProvider;


public class ActivityUtilsModule extends ReactContextBaseJavaModule {
    Promise promise;


    public ActivityUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ActivityUtilsModule";
    }


    @ReactMethod
    public void finish(int result, String action, ReadableMap map) {
        Activity activity = getReactApplicationContext().getCurrentActivity();
        Intent intent = new Intent(action);
        intent.putExtras(Arguments.toBundle(map));
        activity.setResult(result, intent);
        activity.finish();
    }

    @ReactMethod
    public void isActivityExists(String pkg,String cls, final Promise promise) {
        promise.resolve(ActivityUtils.isActivityExists(pkg,cls));
    }

    @ReactMethod
    public void startLauncherActivity(String pkg) {
        if(pkg==null || pkg == "") {
            ActivityUtils.startLauncherActivity();
        } else {
            ActivityUtils.startLauncherActivity(pkg);
        }
    }

    @ReactMethod
    public void getLauncherActivity(String pkg, final Promise promise) {
        if(pkg==null || pkg == "") {
            promise.resolve(ActivityUtils.getLauncherActivity());
        } else {
            promise.resolve(ActivityUtils.getLauncherActivity(pkg));
        }
    }

}
