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



public class ShellUtilsModule extends ReactContextBaseJavaModule {


    public ShellUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ShellUtilsModule";
    }

    @ReactMethod
    public void execCmd(ReadableArray commands,ReadableArray envp,final boolean isRooted, final Promise promise) {
        List<String> commandList = new ArrayList<String>();
        for (int i=0;i<commands.size();i++) {
            commandList.add(commands.getString(i));
        }
        List<String> envpList = new ArrayList<String>();
        for (int i=0;i<envp.size();i++) {
            envpList.add(envp.getString(i));
        }
        try {
            ShellUtils.CommandResult result = ShellUtils.execCmd(commandList, envpList, isRooted);
            WritableMap map = Arguments.createMap();
            map.putString("errorMsg", result.errorMsg);
            map.putString("successMsg", result.successMsg);
            map.putInt("result", result.result);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject("-1", e.getMessage());
        }
    }

}
