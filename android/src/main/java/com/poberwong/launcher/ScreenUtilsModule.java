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
import com.blankj.utilcode.util.ScreenUtils;
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



public class ScreenUtilsModule extends ReactContextBaseJavaModule {


    public ScreenUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ScreenUtilsModule";
    }

    @ReactMethod
    public void getScreenWidth(final Promise promise) {
        promise.resolve(ScreenUtils.getScreenWidth());
    }

    @ReactMethod
    public void getScreenHeight(final Promise promise) {
        promise.resolve(ScreenUtils.getScreenHeight());
    }

    @ReactMethod
    public void getAppScreenWidth(final Promise promise) {
        promise.resolve(ScreenUtils.getAppScreenWidth());
    }

    @ReactMethod
    public void getAppScreenHeight(final Promise promise) {
        promise.resolve(ScreenUtils.getAppScreenHeight());
    }

    @ReactMethod
    public void getScreenDensity(final Promise promise) {
        promise.resolve(ScreenUtils.getScreenDensity());
    }

    @ReactMethod
    public void getScreenDensityDpi(final Promise promise) {
        promise.resolve(ScreenUtils.getScreenDensityDpi());
    }

    @ReactMethod
    public void getScreenXDpi(final Promise promise) {
        promise.resolve(ScreenUtils.getScreenXDpi());
    }

    @ReactMethod
    public void getScreenYDpi(final Promise promise) {
        promise.resolve(ScreenUtils.getScreenYDpi());
    }

    @ReactMethod
    public void setFullScreen() {
        ScreenUtils.setFullScreen(getCurrentActivity());
    }

    @ReactMethod
    public void setNonFullScreen() {
        ScreenUtils.setNonFullScreen(getCurrentActivity());
    }

    @ReactMethod
    public void toggleFullScreen() {
        ScreenUtils.toggleFullScreen(getCurrentActivity());
    }

    @ReactMethod
    public void isFullScreen(final Promise promise) {
        promise.resolve(ScreenUtils.isFullScreen(getCurrentActivity()));
    }

    @ReactMethod
    public void setLandscape() {
        ScreenUtils.setLandscape(getCurrentActivity());
    }

    @ReactMethod
    public void setPortrait() {
        ScreenUtils.setPortrait(getCurrentActivity());
    }

    @ReactMethod
    public void isLandscape(final Promise promise) {
        promise.resolve(ScreenUtils.isLandscape());
    }

    @ReactMethod
    public void isPortrait(final Promise promise) {
        promise.resolve(ScreenUtils.isPortrait());
    }

    @ReactMethod
    public void getScreenRotation(final Promise promise) {
        promise.resolve(ScreenUtils.getScreenRotation(getCurrentActivity()));
    }

    @ReactMethod
    public void isScreenLock(final Promise promise) {
        promise.resolve(ScreenUtils.isScreenLock());
    }

    @ReactMethod
    public void setSleepDuration(int duration) {
        ScreenUtils.setSleepDuration(duration);
    }

    @ReactMethod
    public void getSleepDuration(final Promise promise) {
        promise.resolve(ScreenUtils.getSleepDuration());
    }
}
