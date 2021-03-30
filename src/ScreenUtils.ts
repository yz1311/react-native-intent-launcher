import {NativeModules} from "react-native";

const ScreenUtilsModule = NativeModules.ScreenUtilsModule;

const ScreenUtils = {
    getScreenWidth: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenWidth();
    },
    getScreenHeight: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenHeight();
    },
    getAppScreenWidth: ():Promise<number>=>{
        return ScreenUtilsModule.getAppScreenWidth();
    },
    getAppScreenHeight: ():Promise<number>=>{
        return ScreenUtilsModule.getAppScreenHeight();
    },
    getScreenDensity: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenDensity();
    },
    getScreenDensityDpi: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenDensityDpi();
    },
    getScreenXDpi: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenXDpi();
    },
    getScreenYDpi: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenYDpi();
    },
    setFullScreen: ()=>{
        ScreenUtilsModule.setFullScreen();
    },
    setNonFullScreen: ()=>{
        ScreenUtilsModule.setNonFullScreen();
    },
    toggleFullScreen: ()=>{
        ScreenUtilsModule.toggleFullScreen();
    },
    isFullScreen: ():Promise<boolean>=>{
        return ScreenUtilsModule.isFullScreen();
    },
    setLandscape: ()=>{
        ScreenUtilsModule.setLandscape();
    },
    setPortrait: ()=>{
        ScreenUtilsModule.setPortrait();
    },
    isLandscape: ():Promise<boolean>=>{
        return ScreenUtilsModule.isLandscape();
    },
    isPortrait: ():Promise<boolean>=>{
        return ScreenUtilsModule.isPortrait();
    },
    getScreenRotation: ():Promise<number>=>{
        return ScreenUtilsModule.getScreenRotation();
    },
    setSleepDuration: (duration:number) =>{
        ScreenUtilsModule.setSleepDuration(duration);
    },
    getSleepDuration: ():Promise<number>=>{
        return ScreenUtilsModule.getSleepDuration();
    },
}

export default ScreenUtils;
