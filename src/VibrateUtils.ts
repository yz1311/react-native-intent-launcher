import {NativeModules} from "react-native";

const VibrateUtilsModule = NativeModules.VibrateUtilsModule;

const VibrateUtils = {
    vibrate: (milliseconds: number) =>{
        return VibrateUtilsModule.vibrate(milliseconds);
    },
    vibrateByPattern: (pattern: Array<number>, repeat: number) =>{
        return VibrateUtilsModule.vibrateByPattern(pattern, repeat);
    },
    cancel: () =>{
        return VibrateUtilsModule.cancel();
    },
}

export default VibrateUtils;
