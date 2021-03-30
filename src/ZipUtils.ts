import {NativeModules} from "react-native";

const ZipUtilsModule = NativeModules.ZipUtilsModule;

const ZipUtils = {
    /**
     * 压缩文件
     * @param srcFilePath
     * @param zipFilePath
     * @param comment
     */
    zipFile: (srcFilePath:string, zipFilePath: string, comment: string):Promise<boolean> =>{
        return ZipUtilsModule.zipFile(srcFilePath, zipFilePath, comment);
    },
    /**
     * 批量压缩文件
     * @param srcFilePaths
     * @param zipFilePath
     * @param comment
     */
    zipFiles: (srcFilePaths:Array<string>, zipFilePath: string, comment: string):Promise<boolean> =>{
        return ZipUtilsModule.zipFiles(srcFilePaths, zipFilePath, comment);
    },
    /**
     * 解压文件
     * @param zipFilePath
     * @param destDirPath
     */
    unzipFile: (zipFilePath:string, destDirPath: string):Promise<Array<string>> =>{
        return ZipUtilsModule.unzipFile(zipFilePath, destDirPath);
    },
    /**
     * 解压带有关键字的文件
     * @param zipFilePath
     * @param destDirPath
     * @param keyword
     */
    unzipFileByKeyword: (zipFilePath:string, destDirPath: string,keyword:string):Promise<Array<string>> =>{
        return ZipUtilsModule.unzipFileByKeyword(zipFilePath, destDirPath);
    },
    /**
     * 获取压缩文件中的文件路径链表
     * @param zipFilePath
     */
    getFilesPath: (zipFilePath:string):Promise<Array<string>> =>{
        return ZipUtilsModule.getFilesPath(zipFilePath);
    },
    /**
     * 获取压缩文件中的注释链表
     * @param zipFilePath
     */
    getComments: (zipFilePath:string):Promise<Array<string>> =>{
        return ZipUtilsModule.getComments(zipFilePath);
    },
}

export default ZipUtils;
