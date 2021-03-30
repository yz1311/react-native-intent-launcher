import {NativeModules} from "react-native";

const ScreenUtilsModule = NativeModules.ScreenUtilsModule;

const ScreenUtils = {
    /**
     * 获取屏幕的宽度（单位：px）
     */
    getScreenWidth: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenWidth();
    },
    /**
     * 获取屏幕的高度（单位：px）
     */
    getScreenHeight: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenHeight();
    },
    /**
     * 获取应用屏幕的宽度（单位：px）
     */
    getAppScreenWidth: ():Promise<number>=>{
        return ScreenUtilsModule.getAppScreenWidth();
    },
    /**
     * 获取应用屏幕的高度（单位：px）
     */
    getAppScreenHeight: ():Promise<number>=>{
        return ScreenUtilsModule.getAppScreenHeight();
    },
    /**
     * 获取屏幕密度
     */
    getScreenDensity: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenDensity();
    },
    /**
     * 获取屏幕密度 DPI
     */
    getScreenDensityDpi: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenDensityDpi();
    },

    getScreenXDpi: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenXDpi();
    },

    getScreenYDpi: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenYDpi();
    },
    /**
     * 设置屏幕为全屏
     */
    setFullScreen: ()=>{
        ScreenUtilsModule.setFullScreen();
    },
    /**
     * 设置屏幕为非全屏
     */
    setNonFullScreen: ()=>{
        ScreenUtilsModule.setNonFullScreen();
    },
    /**
     * 切换屏幕为全屏与否状态
     */
    toggleFullScreen: ()=>{
        ScreenUtilsModule.toggleFullScreen();
    },
    /**
     * 判断屏幕是否为全屏
     */
    isFullScreen: ():Promise<boolean>=>{
        return ScreenUtilsModule.isFullScreen();
    },
    /**
     * 设置屏幕为横屏
     */
    setLandscape: ()=>{
        ScreenUtilsModule.setLandscape();
    },
    /**
     * 设置屏幕为竖屏
     */
    setPortrait: ()=>{
        ScreenUtilsModule.setPortrait();
    },
    /**
     * 判断是否横屏
     */
    isLandscape: ():Promise<boolean>=>{
        return ScreenUtilsModule.isLandscape();
    },
    /**
     * 判断是否竖屏
     */
    isPortrait: ():Promise<boolean>=>{
        return ScreenUtilsModule.isPortrait();
    },
    /**
     * 获取屏幕旋转角度
     */
    getScreenRotation: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenRotation();
    },
    /**
     * 判断是否锁屏
     */
    isScreenLock: ():Promise<boolean>=>{
        return ScreenUtilsModule.isScreenLock();
    },
    /**
     * 设置进入休眠时长
     * @param duration
     */
    setSleepDuration: (duration:number) =>{
        ScreenUtilsModule.setSleepDuration(duration);
    },
    /**
     * 获取进入休眠时长
     */
    getSleepDuration: ():Promise<number>=>{
        return ScreenUtilsModule.getSleepDuration();
    },
}

export default ScreenUtils;
