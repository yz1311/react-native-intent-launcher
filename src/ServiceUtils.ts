import {NativeModules} from "react-native";

const ServiceUtilsModule = NativeModules.ServiceUtilsModule;

const ServiceUtils = {
    /**
     * 获取所有运行的服务
     */
    getAllRunningServices: ():Promise<Array<string>> =>{
        return ServiceUtilsModule.getAllRunningServices();
    },
    /**
     * 启动服务
     * @param className
     */
    startService: (className:string) =>{
        return ServiceUtilsModule.startService(className);
    },
    /**
     * 停止服务
     * @param className
     */
    stopService: (className:string) =>{
        return ServiceUtilsModule.stopService(className);
    },
    /**
     * 判断服务是否运行
     * @param className
     */
    isServiceRunning: (className:string):Promise<boolean> =>{
        return ServiceUtilsModule.isServiceRunning(className);
    },
}

export default ServiceUtils;
