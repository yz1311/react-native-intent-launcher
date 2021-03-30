import {NativeModules} from "react-native";

const ShellUtilsModule = NativeModules.ShellUtilsModule;

const ShellUtils = {
    execCmd: (commands:Array<string>, envp:Array<string>, isRooted: boolean):Promise<{
        errorMsg: string;
        successMsg: string;
        result: number;
    }> =>{
        return ShellUtilsModule.execCmd(commands, envp, isRooted);
    },
}


export default ShellUtils;
