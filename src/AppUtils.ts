import {NativeModules} from "react-native";
import {appInfo} from "../types";

const AppUtilsModule = NativeModules.AppUtilsModule;

const ActivityUtils = {
    installApp: (filePath:string)=>{
        AppUtilsModule.installApp(filePath);
    },
    uninstallApp: (packageName:string)=>{
        AppUtilsModule.uninstallApp(packageName);
    },
    isAppInstalled: (packageName:string):Promise<boolean>=>{
        return AppUtilsModule.isAppInstalled(packageName);
    },
    isAppRoot: ():Promise<boolean>=>{
        return AppUtilsModule.isAppRoot();
    },
    isAppDebug: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.isAppDebug(packageName);
    },
    isAppSystem: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.isAppSystem(packageName);
    },
    isAppForeground: ():Promise<boolean>=>{
        return AppUtilsModule.isAppForeground();
    },
    isAppRunning: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.isAppRunning(packageName);
    },
    launchApp: (packageName:string)=>{
        AppUtilsModule.launchApp(packageName);
    },
    relaunchApp: (isKillProcess:boolean)=>{
        AppUtilsModule.relaunchApp(isKillProcess);
    },
    launchAppDetailsSettings: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.launchAppDetailsSettings(packageName);
    },
    exitApp: ()=>{
        AppUtilsModule.exitApp();
    },
    getAppPackageName: ():Promise<boolean>=>{
        return AppUtilsModule.getAppPackageName();
    },
    getAppName: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.getAppName(packageName);
    },
    getAppPath: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.getAppPath(packageName);
    },
    getAppVersionName: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.getAppVersionName(packageName);
    },
    getAppVersionCode: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.getAppVersionCode(packageName);
    },
    getAppSignaturesHash: (packageName:string, algorithm: 'SHA1'|'SHA256'|'MD5'):Promise<Array<string>> =>{
        return AppUtilsModule.getAppSignaturesHash(packageName, algorithm);
    },
    getAppInfo: (packageName?:string):Promise<appInfo>=>{
        return AppUtilsModule.getAppInfo(packageName);
    },
    getAppsInfo: ():Promise<Array<appInfo>> =>{
        return AppUtilsModule.getAppsInfo();
    },
    getApkInfo: (apkFilePath?:string):Promise<appInfo>=>{
        return AppUtilsModule.getApkInfo(apkFilePath);
    },
}

export default ActivityUtils;
