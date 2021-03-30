import {NativeModules} from "react-native";

const ActivityUtilsModule = NativeModules.ActivityUtilsModule;

const ActivityUtils = {
    finish: (result: number, action: string, map: Record<string, any>) => {
        ActivityUtilsModule.finish(result, action, map);
    },
    isActivityExists: (pkg:string, cls: string)=>{
        return ActivityUtilsModule.isActivityExists(pkg, cls);
    },
    startLauncherActivity: (pkg:string)=>{
        ActivityUtilsModule.startLauncherActivity(pkg);
    },
    getLauncherActivity: (pkg:string)=>{
        return ActivityUtilsModule.getLauncherActivity(pkg);
    },
}

export default ActivityUtils;
