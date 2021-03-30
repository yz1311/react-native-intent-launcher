import {NativeModules} from "react-native";

const BrightnessUtilsModule = NativeModules.BrightnessUtilsModule;

const BrightnessUtils = {
    /**
     * 判断是否开启自动调节亮度
     */
    isAutoBrightnessEnabled: ():Promise<boolean>=>{
        return BrightnessUtilsModule.isAutoBrightnessEnabled();
    },
    /**
     * 设置是否开启自动调节亮度
     * @param enabled
     */
    setAutoBrightnessEnabled: (enabled: boolean):Promise<boolean>=>{
        return BrightnessUtilsModule.setAutoBrightnessEnabled();
    },
    /**
     * 获取屏幕亮度
     */
    getBrightness: ():Promise<number>=>{
        return BrightnessUtilsModule.getBrightness();
    },
    /**
     * 设置屏幕亮度
     * @param brightness
     */
    setBrightness: (brightness: number):Promise<boolean>=>{
        return BrightnessUtilsModule.setBrightness(brightness);
    },
}


export default BrightnessUtils;
