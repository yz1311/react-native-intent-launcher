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


public class VolumeUtilsModule extends ReactContextBaseJavaModule {


    public VolumeUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "VolumeUtilsModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }

    @ReactMethod
    public void getVolume(int streamType, final Promise promise) {
        try {
            int result = VolumeUtils.getVolume(streamType);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }


    @ReactMethod
    public void setVolume(int streamType, int volume, int flags) {
        VolumeUtils.setVolume(streamType, volume, flags);
    }

    @ReactMethod
    public void getMaxVolume(int streamType, final Promise promise) {
        try {
            int result = VolumeUtils.getMaxVolume(streamType);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }

    @ReactMethod
    public void getMinVolume(int streamType, final Promise promise) {
        try {
            int result = VolumeUtils.getMinVolume(streamType);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }
}
