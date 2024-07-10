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
import com.blankj.utilcode.util.VibrateUtils;
import com.blankj.utilcode.util.VolumeUtils;
import com.blankj.utilcode.util.ZipUtils;
import com.facebook.react.bridge.*;

import java.io.Console;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Iterator;

import androidx.annotation.Nullable;


public class VibrateUtilsModule extends ReactContextBaseJavaModule {


    public VibrateUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "VibrateUtilsModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }

    @ReactMethod
    public void vibrate(double milliseconds) {
        try {
            VibrateUtils.vibrate((long) milliseconds);
        } catch (Exception e) {

        }
    }

    @ReactMethod
    public void vibrateByPattern(ReadableArray pattern, int repeat) {
        long[] patterns = new long[pattern.size()];
        for (int i=0;i<pattern.size();i++) {
            patterns[i] = pattern.getInt(i);
        }
        try {
            VibrateUtils.vibrate(patterns, repeat);
        } catch (Exception e) {

        }
    }

    @ReactMethod
    public void cancel() {
        try {
            VibrateUtils.cancel();
        } catch (Exception e) {

        }
    }
}
