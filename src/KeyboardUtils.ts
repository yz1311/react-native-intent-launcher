import {NativeModules} from "react-native";

const KeyboardUtilsModule = NativeModules.KeyboardUtilsModule;

const KeyboardUtils = {
    /**
     * 显示软键盘
     */
    showSoftInput: () =>{
        KeyboardUtilsModule.showSoftInput();
    },
    /**
     * 隐藏软键盘
     */
    hideSoftInput: () =>{
        KeyboardUtilsModule.hideSoftInput();
    },
    /**
     * 切换键盘显示与否状态
     */
    toggleSoftInput: () =>{
        KeyboardUtilsModule.toggleSoftInput();
    },
    /**
     * 判断软键盘是否可见
     */
    isSoftInputVisible: ():Promise<boolean> =>{
        return KeyboardUtilsModule.isSoftInputVisible();
    },
    /**
     * 修复安卓 5497 BUG
     */
    fixAndroidBug5497: () =>{
        KeyboardUtilsModule.fixAndroidBug5497();
    },
    /**
     * 修复软键盘内存泄漏
     */
    fixSoftInputLeaks: () =>{
        KeyboardUtilsModule.fixSoftInputLeaks();
    },
}

export default KeyboardUtils;
