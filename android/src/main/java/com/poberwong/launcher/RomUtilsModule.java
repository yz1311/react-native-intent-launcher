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
import com.blankj.utilcode.util.RomUtils;
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



public class RomUtilsModule extends ReactContextBaseJavaModule {


    public RomUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RomUtilsModule";
    }

    @ReactMethod
    public void isHuawei(final Promise promise) {
        promise.resolve(RomUtils.isHuawei());
    }

    @ReactMethod
    public void isVivo(final Promise promise) {
        promise.resolve(RomUtils.isVivo());
    }

    @ReactMethod
    public void isXiaomi(final Promise promise) {
        promise.resolve(RomUtils.isXiaomi());
    }

    @ReactMethod
    public void isOppo(final Promise promise) {
        promise.resolve(RomUtils.isOppo());
    }

    @ReactMethod
    public void isLeeco(final Promise promise) {
        promise.resolve(RomUtils.isLeeco());
    }

    @ReactMethod
    public void is360(final Promise promise) {
        promise.resolve(RomUtils.is360());
    }

    @ReactMethod
    public void isZte(final Promise promise) {
        promise.resolve(RomUtils.isZte());
    }

    @ReactMethod
    public void isOneplus(final Promise promise) {
        promise.resolve(RomUtils.isOneplus());
    }

    @ReactMethod
    public void isNubia(final Promise promise) {
        promise.resolve(RomUtils.isNubia());
    }

    @ReactMethod
    public void isCoolpad(final Promise promise) {
        promise.resolve(RomUtils.isCoolpad());
    }

    @ReactMethod
    public void isLg(final Promise promise) {
        promise.resolve(RomUtils.isLg());
    }

    @ReactMethod
    public void isGoogle(final Promise promise) {
        promise.resolve(RomUtils.isGoogle());
    }

    @ReactMethod
    public void isSamsung(final Promise promise) {
        promise.resolve(RomUtils.isSamsung());
    }

    @ReactMethod
    public void isMeizu(final Promise promise) {
        promise.resolve(RomUtils.isMeizu());
    }

    @ReactMethod
    public void isLenovo(final Promise promise) {
        promise.resolve(RomUtils.isLenovo());
    }

    @ReactMethod
    public void isSmartisan(final Promise promise) {
        promise.resolve(RomUtils.isSmartisan());
    }

    @ReactMethod
    public void isHtc(final Promise promise) {
        promise.resolve(RomUtils.isHtc());
    }

    @ReactMethod
    public void isSony(final Promise promise) {
        promise.resolve(RomUtils.isSony());
    }

    @ReactMethod
    public void isGionee(final Promise promise) {
        promise.resolve(RomUtils.isGionee());
    }

    @ReactMethod
    public void isMotorola(final Promise promise) {
        promise.resolve(RomUtils.isMotorola());
    }
}
