import {NativeModules} from "react-native";

const VolumeUtilsModule = NativeModules.VolumeUtilsModule;

const VolumeUtils = {
    getVolume: (streamType:number):Promise<number> =>{
        return VolumeUtilsModule.getVolume(streamType);
    },
    setVolume: (streamType:number,volume:number,flags: number) =>{
        VolumeUtilsModule.setVolume(streamType, volume, flags);
    },
    getMaxVolume: (streamType:number):Promise<number> =>{
        return VolumeUtilsModule.getMaxVolume(streamType);
    },
    getMinVolume: (streamType:number):Promise<number> =>{
        return VolumeUtilsModule.getMinVolume(streamType);
    },
}

export default VolumeUtils;
