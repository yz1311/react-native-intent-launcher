import {NativeModules} from "react-native";

const ShellUtilsModule = NativeModules.ShellUtilsModule;

const ShellUtils = {
    /**
     * 执行命令
     * @param commands  The commands.
     * @param envp  The environment variable settings.
     * @param isRooted True to use root, false otherwise.
     */
    execCmd: (commands:Array<string>, envp:Array<string>, isRooted: boolean):Promise<{
        errorMsg: string;
        successMsg: string;
        result: number;
    }> =>{
        return ShellUtilsModule.execCmd(commands, envp, isRooted);
    },
}


export default ShellUtils;
