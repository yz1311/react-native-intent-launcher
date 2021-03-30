import {NativeModules} from "react-native";

const RomUtilsModule = NativeModules.RomUtilsModule;

const RomUtils = {
    isHuawei: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isVivo: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isXiaomi: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isOppo: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isLeeco: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    is360: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isZte: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isOneplus: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isNubia: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isCoolpad: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isLg: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isGoogle: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isSamsung: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isMeizu: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isLenovo: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isSmartisan: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isHtc: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isSony: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isGionee: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
    isMotorola: ():Promise<boolean>=>{
        return RomUtilsModule.isHuawei();
    },
}

export default RomUtils;
