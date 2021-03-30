package com.poberwong.launcher;

import android.app.Activity;
import android.content.Intent;
import android.content.ComponentName;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import com.blankj.utilcode.util.AppUtils;
import com.facebook.react.bridge.*;

import java.io.Console;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Iterator;

import androidx.core.content.FileProvider;


public class AppUtilsModule extends ReactContextBaseJavaModule {
    Promise promise;


    public AppUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AppUtilsModule";
    }

    @ReactMethod
    public void installApp(String filePath) {
        AppUtils.installApp(filePath);
    }

    @ReactMethod
    public void uninstallApp(String packageName) {
        AppUtils.uninstallApp(packageName);
    }

    @ReactMethod
    public void isAppInstalled(String packageName, final Promise promise) {
        promise.resolve(AppUtils.isAppInstalled(packageName));
    }

    @ReactMethod
    public void isAppRoot(final Promise promise) {
        promise.resolve(AppUtils.isAppRoot());
    }


    @ReactMethod
    public void isAppDebug(String packageName, final Promise promise) {
        if(packageName==null||packageName=="") {
            promise.resolve(AppUtils.isAppDebug());
        } else {
            promise.resolve(AppUtils.isAppDebug(packageName));
        }
    }

    @ReactMethod
    public void isAppSystem(String packageName, final Promise promise) {
        if(packageName==null||packageName=="") {
            promise.resolve(AppUtils.isAppSystem());
        } else {
            promise.resolve(AppUtils.isAppSystem(packageName));
        }
    }

    @ReactMethod
    public void isAppForeground(final Promise promise) {
        promise.resolve(AppUtils.isAppForeground());
    }

    @ReactMethod
    public void isAppRunning(String packageName, final Promise promise) {
        promise.resolve(AppUtils.isAppRunning(packageName));
    }

    @ReactMethod
    public void launchApp(String packageName) {
        AppUtils.launchApp(packageName);
    }

    @ReactMethod
    public void relaunchApp(Boolean isKillProcess) {
        AppUtils.relaunchApp(isKillProcess);
    }


    @ReactMethod
    public void launchAppDetailsSettings(String packageName) {
        if(packageName==null||packageName=="") {
            AppUtils.launchAppDetailsSettings();
        } else {
            AppUtils.launchAppDetailsSettings(packageName);
        }
    }

    @ReactMethod
    public void exitApp() {
        AppUtils.exitApp();
    }

    @ReactMethod
    public void getAppPackageName(final Promise promise) {
        promise.resolve(AppUtils.getAppPackageName());
    }

    @ReactMethod
    public void getAppName(String packageName, final Promise promise) {
        if(packageName==null||packageName=="") {
            promise.resolve(AppUtils.getAppName());
        } else {
            promise.resolve(AppUtils.getAppName(packageName));
        }
    }


    @ReactMethod
    public void getAppPath(String packageName, final Promise promise) {
        if(packageName==null||packageName=="") {
            promise.resolve(AppUtils.getAppPath());
        } else {
            promise.resolve(AppUtils.getAppPath(packageName));
        }
    }


    @ReactMethod
    public void getAppVersionName(String packageName, final Promise promise) {
        if(packageName==null||packageName=="") {
            promise.resolve(AppUtils.getAppVersionName());
        } else {
            promise.resolve(AppUtils.getAppVersionName(packageName));
        }
    }


    @ReactMethod
    public void getAppVersionCode(String packageName, final Promise promise) {
        if(packageName==null||packageName=="") {
            promise.resolve(AppUtils.getAppVersionCode());
        } else {
            promise.resolve(AppUtils.getAppVersionCode(packageName));
        }
    }

    @ReactMethod
    public void getAppSignaturesHash(String packageName,String algorithm, final Promise promise) {
        WritableArray array = Arguments.createArray();
        List<String> resultList = new ArrayList<String>();
        switch (algorithm) {
            case "SHA1":
                if(packageName==null||packageName=="") {
                    resultList = AppUtils.getAppSignaturesSHA1();
                } else {
                    resultList = AppUtils.getAppSignaturesSHA1(packageName);
                }
                break;
            case "SHA256":
                if(packageName==null||packageName=="") {
                    resultList = AppUtils.getAppSignaturesSHA256();
                } else {
                    resultList = AppUtils.getAppSignaturesSHA256(packageName);
                }
                break;
            case "MD5":
                if(packageName==null||packageName=="") {
                    resultList = AppUtils.getAppSignaturesMD5();
                } else {
                    resultList = AppUtils.getAppSignaturesMD5(packageName);
                }
                break;
        }
        for (String str:resultList) {
            array.pushString(str);
        }
        promise.resolve(array);
    }

    @ReactMethod
    public void getAppInfo(String packageName, final Promise promise) {
        AppUtils.AppInfo info = null;
        if(packageName==null||packageName=="") {
            info = AppUtils.getAppInfo();
        } else {
            info = AppUtils.getAppInfo(packageName);
        }
        WritableMap map = apkInfoToMap(info);
        promise.resolve(map);
    }

    @ReactMethod
    public void getAppsInfo(final Promise promise) {
        List<AppUtils.AppInfo> infos = AppUtils.getAppsInfo();
        WritableArray array = Arguments.createArray();
        for (AppUtils.AppInfo info:infos) {
            WritableMap map = apkInfoToMap(info);
            array.pushMap(map);
        }
        promise.resolve(array);
    }

    @ReactMethod
    public void getApkInfo(String apkFilePath, final Promise promise) {
        AppUtils.AppInfo info = AppUtils.getApkInfo(apkFilePath);
        WritableMap map = apkInfoToMap(info);
        promise.resolve(map);
    }

    private WritableMap apkInfoToMap(AppUtils.AppInfo info) {
        WritableMap map = Arguments.createMap();
        map.putString("name", info.getName());
        map.putString("packageName", info.getPackageName());
        map.putString("packagePath", info.getPackagePath());
        map.putString("versionName", info.getVersionName());
        map.putInt("versionCode", info.getVersionCode());
        map.putBoolean("isSystem", info.isSystem());
        return map;
    }
}
