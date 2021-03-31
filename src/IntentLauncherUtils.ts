import {NativeModules} from "react-native";
import {intent, resolveInfo} from "../types";

const IntentLauncher = NativeModules.IntentLauncher;

const IntentLauncherUtils = {
    startActivity: (args:intent):Promise<{resultCode:number,data:string,extra:Record<string, any>}> => {
        return IntentLauncher.startActivity(args);
    },
    finish: (resultCode:number, action: string, bundle: Record<string, any>) => {
        IntentLauncher.finish(resultCode, action, bundle);
    },
    isIntentAvailable: (args:intent):Promise<boolean> => {
        return IntentLauncher.isIntentAvailable(args);
    },
    getAvailableResolveInfos: (args:intent):Promise<Array<resolveInfo>> => {
        return IntentLauncher.getAvailableResolveInfos(args);
    },
}


export default IntentLauncherUtils;
