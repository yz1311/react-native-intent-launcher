import {NativeModules} from "react-native";

const KeyboardUtilsModule = NativeModules.KeyboardUtilsModule;

const KeyboardUtils = {
    showSoftInput: () =>{
        KeyboardUtilsModule.showSoftInput();
    },
    hideSoftInput: () =>{
        KeyboardUtilsModule.hideSoftInput();
    },
    toggleSoftInput: () =>{
        KeyboardUtilsModule.toggleSoftInput();
    },
    isSoftInputVisible: ():Promise<boolean> =>{
        return KeyboardUtilsModule.isSoftInputVisible();
    },
    fixAndroidBug5497: () =>{
        KeyboardUtilsModule.fixAndroidBug5497();
    },
    fixSoftInputLeaks: () =>{
        KeyboardUtilsModule.fixSoftInputLeaks();
    },
}

export default KeyboardUtils;
