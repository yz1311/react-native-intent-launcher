import {NativeModules} from "react-native";

const ServiceUtilsModule = NativeModules.ServiceUtilsModule;

const ServiceUtils = {
    getAllRunningServices: ():Promise<Array<string>> =>{
        return ServiceUtilsModule.getAllRunningServices();
    },
    startService: (className:string) =>{
        return ServiceUtilsModule.startService(className);
    },
    stopService: (className:string) =>{
        return ServiceUtilsModule.stopService(className);
    },
    isServiceRunning: (className:string):Promise<boolean> =>{
        return ServiceUtilsModule.isServiceRunning(className);
    },
}

export default ServiceUtils;
