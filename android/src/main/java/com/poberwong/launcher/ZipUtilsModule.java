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
import com.blankj.utilcode.util.ZipUtils;
import com.facebook.react.bridge.*;

import java.io.Console;
import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.Iterator;



public class ZipUtilsModule extends ReactContextBaseJavaModule {


    public ZipUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ZipUtilsModule";
    }

    @ReactMethod
    public void zipFile(String srcFilePath,final String zipFilePath,final String comment, final Promise promise) {
        try {
            boolean result = ZipUtils.zipFile(srcFilePath, zipFilePath, comment);
            if(result) {
                promise.resolve(true);
            } else {
                promise.reject("-1", "");
            }
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }


    @ReactMethod
    public void zipFiles(ReadableArray srcFilePaths,final String zipFilePath,final String comment, final Promise promise) {
        Collection<String> collection = new ArrayList<String>();
        for (int i=0;i<srcFilePaths.size();i++) {
            collection.add(srcFilePaths.getString(i));
        }
        try {
            boolean result = ZipUtils.zipFiles(collection, zipFilePath, comment);
            if(result) {
                promise.resolve(true);
            } else {
                promise.reject("-1", "");
            }
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }

    @ReactMethod
    public void unzipFile(String zipFilePath,final String destDirPath, final Promise promise) {
        try {
            List<File> result = ZipUtils.unzipFile(zipFilePath, destDirPath);
            WritableArray array = Arguments.createArray();
            for (int i = 0;i<result.size();i++) {
                array.pushString(result.get(i).getAbsolutePath());
            }
            promise.resolve(array);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }

    @ReactMethod
    public void unzipFileByKeyword(String zipFilePath,final String destDirPath, final String keyword, final Promise promise) {
        try {
            List<File> result = ZipUtils.unzipFileByKeyword(zipFilePath, destDirPath, keyword);
            WritableArray array = Arguments.createArray();
            for (int i = 0;i<result.size();i++) {
                array.pushString(result.get(i).getAbsolutePath());
            }
            promise.resolve(array);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }

    @ReactMethod
    public void getFilesPath(String zipFilePath, final Promise promise) {
        try {
            List<String> result = ZipUtils.getFilesPath(zipFilePath);
            WritableArray array = Arguments.createArray();
            for (int i = 0;i<result.size();i++) {
                array.pushString(result.get(i));
            }
            promise.resolve(array);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }

    @ReactMethod
    public void getComments(String zipFilePath, final Promise promise) {
        try {
            List<String> result = ZipUtils.getComments(zipFilePath);
            WritableArray array = Arguments.createArray();
            for (int i = 0;i<result.size();i++) {
                array.pushString(result.get(i));
            }
            promise.resolve(array);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }
}
