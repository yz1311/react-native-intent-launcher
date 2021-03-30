import {NativeModules} from "react-native";

const VibrateUtilsModule = NativeModules.VibrateUtilsModule;

const VibrateUtils = {
    /**
     * 震动
     * @param milliseconds
     */
    vibrate: (milliseconds: number) =>{
        return VibrateUtilsModule.vibrate(milliseconds);
    },
    /**
     * 震动
     * @param pattern
     * @param repeat
     */
    vibrateByPattern: (pattern: Array<number>, repeat: number) =>{
        return VibrateUtilsModule.vibrateByPattern(pattern, repeat);
    },
    /**
     * 取消
     */
    cancel: () =>{
        return VibrateUtilsModule.cancel();
    },
}

export default VibrateUtils;
