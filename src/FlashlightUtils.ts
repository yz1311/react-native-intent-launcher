import {NativeModules} from "react-native";

const FlashlightUtilsModule = NativeModules.FlashlightUtilsModule;

const FlashlightUtils = {
    isFlashlightEnable: ():Promise<boolean>=>{
        return FlashlightUtilsModule.isFlashlightEnable();
    },
    isFlashlightOn: ():Promise<boolean>=>{
        return FlashlightUtilsModule.isFlashlightOn();
    },
    setFlashlightStatus: (isOn: boolean) =>{
        return FlashlightUtilsModule.setFlashlightStatus(isOn);
    },
    destroy: () =>{
        return FlashlightUtilsModule.destroy();
    },
}

export default FlashlightUtils;
