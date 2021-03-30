import {NativeModules} from "react-native";
import {appInfo} from "../types";

const AppUtilsModule = NativeModules.AppUtilsModule;

const ActivityUtils = {
    /**
     * 安装 App（支持 8.0）
     * @param filePath
     */
    installApp: (filePath:string)=>{
        AppUtilsModule.installApp(filePath);
    },
    /**
     * 卸载 App
     * @param packageName
     */
    uninstallApp: (packageName:string)=>{
        AppUtilsModule.uninstallApp(packageName);
    },
    /**
     * 判断 App 是否安装
     * @param packageName
     */
    isAppInstalled: (packageName:string):Promise<boolean>=>{
        return AppUtilsModule.isAppInstalled(packageName);
    },
    /**
     * 判断 App 是否有 root 权限
     */
    isAppRoot: ():Promise<boolean>=>{
        return AppUtilsModule.isAppRoot();
    },
    /**
     * 判断 App 是否是 Debug 版本
     * @param packageName
     */
    isAppDebug: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.isAppDebug(packageName);
    },
    /**
     * 判断 App 是否是系统应用
     * @param packageName
     */
    isAppSystem: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.isAppSystem(packageName);
    },
    /**
     * 判断 App 是否处于前台
     */
    isAppForeground: ():Promise<boolean>=>{
        return AppUtilsModule.isAppForeground();
    },
    /**
     * 判断 App 是否运行
     * @param packageName
     */
    isAppRunning: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.isAppRunning(packageName);
    },
    /**
     * 打开 App
     * @param packageName
     */
    launchApp: (packageName:string)=>{
        AppUtilsModule.launchApp(packageName);
    },
    /**
     * 重启 App
     * @param isKillProcess
     */
    relaunchApp: (isKillProcess:boolean)=>{
        AppUtilsModule.relaunchApp(isKillProcess);
    },
    /**
     * 打开 App 具体设置
     * @param packageName
     */
    launchAppDetailsSettings: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.launchAppDetailsSettings(packageName);
    },
    /**
     * 关闭应用
     */
    exitApp: ()=>{
        AppUtilsModule.exitApp();
    },
    /**
     * 获取 App 包名
     */
    getAppPackageName: ():Promise<boolean>=>{
        return AppUtilsModule.getAppPackageName();
    },
    /**
     * 获取 App 名称
     * @param packageName
     */
    getAppName: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.getAppName(packageName);
    },
    /**
     * 获取 App 路径
     * @param packageName
     */
    getAppPath: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.getAppPath(packageName);
    },
    /**
     * 获取 App 版本号
     * @param packageName
     */
    getAppVersionName: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.getAppVersionName(packageName);
    },
    /**
     * 获取 App 版本码
     * @param packageName
     */
    getAppVersionCode: (packageName?:string):Promise<boolean>=>{
        return AppUtilsModule.getAppVersionCode(packageName);
    },
    /**
     * 获取 App 签名
     * @param packageName
     * @param algorithm
     */
    getAppSignaturesHash: (packageName:string, algorithm: 'SHA1'|'SHA256'|'MD5'):Promise<Array<string>> =>{
        return AppUtilsModule.getAppSignaturesHash(packageName, algorithm);
    },
    /**
     * 获取 App 信息
     * @param packageName
     */
    getAppInfo: (packageName?:string):Promise<appInfo>=>{
        return AppUtilsModule.getAppInfo(packageName);
    },
    /**
     * 获取所有已安装 App 信息
     */
    getAppsInfo: ():Promise<Array<appInfo>> =>{
        return AppUtilsModule.getAppsInfo();
    },
    /**
     * 获取 Apk 信息
     * @param apkFilePath
     */
    getApkInfo: (apkFilePath?:string):Promise<appInfo>=>{
        return AppUtilsModule.getApkInfo(apkFilePath);
    },
}

export default ActivityUtils;
