import {NativeModules} from "react-native";

const BrightnessUtilsModule = NativeModules.BrightnessUtilsModule;

const BrightnessUtils = {
    isAutoBrightnessEnabled: ():Promise<boolean>=>{
        return BrightnessUtilsModule.isAutoBrightnessEnabled();
    },
    setAutoBrightnessEnabled: (enabled: boolean):Promise<boolean>=>{
        return BrightnessUtilsModule.setAutoBrightnessEnabled();
    },
    getBrightness: ():Promise<number>=>{
        return BrightnessUtilsModule.getBrightness();
    },
    setBrightness: (brightness: number):Promise<boolean>=>{
        return BrightnessUtilsModule.setBrightness(brightness);
    },
}


export default BrightnessUtils;
