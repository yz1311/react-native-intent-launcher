import {NativeModules} from "react-native";

const VolumeUtilsModule = NativeModules.VolumeUtilsModule;

const VolumeUtils = {
    /**
     * 获取音量
     * @param streamType
     */
    getVolume: (streamType:number):Promise<number> =>{
        return VolumeUtilsModule.getVolume(streamType);
    },
    /**
     * 设置音量
     * @param streamType
     * @param volume
     * @param flags
     */
    setVolume: (streamType:number,volume:number,flags: number) =>{
        VolumeUtilsModule.setVolume(streamType, volume, flags);
    },
    /**
     * 获取最大音量
     * @param streamType
     */
    getMaxVolume: (streamType:number):Promise<number> =>{
        return VolumeUtilsModule.getMaxVolume(streamType);
    },
    /**
     * 获取最小音量
     * @param streamType
     */
    getMinVolume: (streamType:number):Promise<number> =>{
        return VolumeUtilsModule.getMinVolume(streamType);
    },
}

export default VolumeUtils;
