import {NativeModules} from "react-native";

const FlashlightUtilsModule = NativeModules.FlashlightUtilsModule;

const FlashlightUtils = {
    /**
     * 判断设备是否支持闪光灯
     */
    isFlashlightEnable: ():Promise<boolean>=>{
        return FlashlightUtilsModule.isFlashlightEnable();
    },
    /**
     * 判断闪光灯是否打开
     */
    isFlashlightOn: ():Promise<boolean>=>{
        return FlashlightUtilsModule.isFlashlightOn();
    },
    /**
     * 设置闪光灯状态
     * @param isOn
     */
    setFlashlightStatus: (isOn: boolean) =>{
        return FlashlightUtilsModule.setFlashlightStatus(isOn);
    },
    /**
     * 销毁
     */
    destroy: () =>{
        return FlashlightUtilsModule.destroy();
    },
}

export default FlashlightUtils;
