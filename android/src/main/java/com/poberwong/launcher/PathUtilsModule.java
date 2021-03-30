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
import com.blankj.utilcode.util.PathUtils;
import com.blankj.utilcode.util.PathUtils;
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



public class PathUtilsModule extends ReactContextBaseJavaModule {


    public PathUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PathUtilsModule";
    }

    @ReactMethod
    public void getRootPath(final Promise promise) {
        promise.resolve(PathUtils.getRootPath());
    }

    @ReactMethod
    public void getDataPath(final Promise promise) {
        promise.resolve(PathUtils.getDataPath());
    }

    @ReactMethod
    public void getDownloadCachePath(final Promise promise) {
        promise.resolve(PathUtils.getDownloadCachePath());
    }

    @ReactMethod
    public void getInternalAppDataPath(final Promise promise) {
        promise.resolve(PathUtils.getInternalAppDataPath());
    }

    @ReactMethod
    public void getInternalAppCodeCacheDir(final Promise promise) {
        promise.resolve(PathUtils.getInternalAppCodeCacheDir());
    }

    @ReactMethod
    public void getInternalAppCachePath(final Promise promise) {
        promise.resolve(PathUtils.getInternalAppCachePath());
    }

    @ReactMethod
    public void getInternalAppDbsPath(final Promise promise) {
        promise.resolve(PathUtils.getInternalAppDbsPath());
    }

    @ReactMethod
    public void getInternalAppDbPath(String name,final Promise promise) {
        promise.resolve(PathUtils.getInternalAppDbPath(name));
    }

    @ReactMethod
    public void getInternalAppFilesPath(final Promise promise) {
        promise.resolve(PathUtils.getInternalAppFilesPath());
    }

    @ReactMethod
    public void getInternalAppSpPath(final Promise promise) {
        promise.resolve(PathUtils.getInternalAppSpPath());
    }

    @ReactMethod
    public void getInternalAppNoBackupFilesPath(final Promise promise) {
        promise.resolve(PathUtils.getInternalAppNoBackupFilesPath());
    }

    @ReactMethod
    public void getExternalStoragePath(final Promise promise) {
        promise.resolve(PathUtils.getExternalStoragePath());
    }

    @ReactMethod
    public void getExternalMusicPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalMusicPath());
    }

    @ReactMethod
    public void getExternalPodcastsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalPodcastsPath());
    }

    @ReactMethod
    public void getExternalRingtonesPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalRingtonesPath());
    }

    @ReactMethod
    public void getExternalAlarmsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAlarmsPath());
    }

    @ReactMethod
    public void getExternalNotificationsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalNotificationsPath());
    }

    @ReactMethod
    public void getExternalPicturesPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalPicturesPath());
    }

    @ReactMethod
    public void getExternalMoviesPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalMoviesPath());
    }

    @ReactMethod
    public void getExternalDownloadsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalDownloadsPath());
    }

    @ReactMethod
    public void getExternalDocumentsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalDocumentsPath());
    }

    @ReactMethod
    public void getExternalAppDataPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppDataPath());
    }

    @ReactMethod
    public void getExternalAppCachePath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppCachePath());
    }

    @ReactMethod
    public void getExternalAppFilesPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppFilesPath());
    }

    @ReactMethod
    public void getExternalAppMusicPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppMusicPath());
    }

    @ReactMethod
    public void getExternalAppPodcastsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppPodcastsPath());
    }

    @ReactMethod
    public void getExternalAppRingtonesPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppRingtonesPath());
    }

    @ReactMethod
    public void getExternalAppAlarmsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppAlarmsPath());
    }

    @ReactMethod
    public void getExternalAppNotificationsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppNotificationsPath());
    }

    @ReactMethod
    public void getExternalAppPicturesPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppPicturesPath());
    }

    @ReactMethod
    public void getExternalAppMoviesPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppMoviesPath());
    }

    @ReactMethod
    public void getExternalAppDownloadPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppDownloadPath());
    }

    @ReactMethod
    public void getExternalAppDcimPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppDcimPath());
    }

    @ReactMethod
    public void getExternalAppDocumentsPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppDocumentsPath());
    }

    @ReactMethod
    public void getExternalAppObbPath(final Promise promise) {
        promise.resolve(PathUtils.getExternalAppObbPath());
    }

    @ReactMethod
    public void getRootPathExternalFirst(final Promise promise) {
        promise.resolve(PathUtils.getRootPathExternalFirst());
    }

    @ReactMethod
    public void getAppDataPathExternalFirst(final Promise promise) {
        promise.resolve(PathUtils.getAppDataPathExternalFirst());
    }

    @ReactMethod
    public void getFilesPathExternalFirst(final Promise promise) {
        promise.resolve(PathUtils.getFilesPathExternalFirst());
    }

    @ReactMethod
    public void getCachePathExternalFirst(final Promise promise) {
        promise.resolve(PathUtils.getCachePathExternalFirst());
    }

}
