import {NativeModules} from "react-native";

const ZipUtilsModule = NativeModules.ZipUtilsModule;

const ZipUtils = {
    zipFile: (srcFilePath:string, zipFilePath: string, comment: string):Promise<boolean> =>{
        return ZipUtilsModule.zipFile(srcFilePath, zipFilePath, comment);
    },
    zipFiles: (srcFilePaths:Array<string>, zipFilePath: string, comment: string):Promise<boolean> =>{
        return ZipUtilsModule.zipFiles(srcFilePaths, zipFilePath, comment);
    },
    unzipFile: (zipFilePath:string, destDirPath: string):Promise<Array<string>> =>{
        return ZipUtilsModule.unzipFile(zipFilePath, destDirPath);
    },
    unzipFileByKeyword: (zipFilePath:string, destDirPath: string,keyword:string):Promise<Array<string>> =>{
        return ZipUtilsModule.unzipFileByKeyword(zipFilePath, destDirPath);
    },
    getFilesPath: (zipFilePath:string):Promise<Array<string>> =>{
        return ZipUtilsModule.getFilesPath(zipFilePath);
    },
    getComments: (zipFilePath:string):Promise<Array<string>> =>{
        return ZipUtilsModule.getComments(zipFilePath);
    },
}

export default ZipUtils;
